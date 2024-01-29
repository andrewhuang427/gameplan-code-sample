import Stripe from "stripe";
import {
  GetConnectedAccountArgs,
  OnboardOrganizationToStripeArgs,
} from "../args/OrganizationResolverArgs";
import { Context } from "../context";
import { Organization } from "../database-types/Organization";

export class OrganizationService {
  async getOrganization(context: Context): Promise<Organization | null> {
    const organizations =
      await context.dataStores.organizationStore.getByUserId(context, {
        id: context.userId,
      });
    if (organizations.length > 0) {
      // todo: in the future, if we want to enable users to have more than 1
      // organization, we can change to return type to be an array
      return organizations[0];
    }
    return null;
  }

  async getConnectedAccount(
    context: Context,
    args: GetConnectedAccountArgs
  ): Promise<Stripe.Account | null> {
    const {
      dataStores: { organizationStore },
      services: { stripeService },
    } = context;

    const organization = await this.validateOrganization(context, args.id, {
      includeUser: true,
    });
    const connectedAccountId = organization.stripeConnectedAccountId;
    if (connectedAccountId == null) {
      return null;
    }

    const connectedAccount = await stripeService.getConnectedAccount(
      connectedAccountId
    );

    const { charges_enabled, payouts_enabled } = connectedAccount;
    if (
      !organization.isStripeConnectedAccountOnboardingComplete &&
      charges_enabled &&
      payouts_enabled
    ) {
      await organizationStore.update(context, {
        id: args.id,
        isStripeConnectedAccountOnboardingComplete: true,
      });
    }
    return connectedAccount;
  }

  async onboardOrganizationToStripe(
    context: Context,
    args: OnboardOrganizationToStripeArgs
  ): Promise<Stripe.AccountLink> {
    const {
      dataStores: { organizationStore },
      services: { stripeService },
    } = context;

    const organization = await this.validateOrganization(context, args.id, {
      includeUser: true,
    });

    let connectedAccountId = organization.stripeConnectedAccountId;
    if (connectedAccountId == null) {
      const newConnectedAccount = await stripeService.createConnectedAccount();
      await organizationStore.update(context, {
        id: args.id,
        stripeConnectedAccountId: newConnectedAccount.id,
      });
      connectedAccountId = newConnectedAccount.id;
    }

    return await stripeService.getConnectedAccountLink(connectedAccountId);
  }

  async validateOrganization(
    context: Context,
    organizationId: number,
    options?: {
      includeUser?: boolean;
      includeConnectedAccount?: boolean;
    }
  ): Promise<Organization> {
    const {
      dataStores: { organizationStore },
      services: { stripeService },
    } = context;

    const organization = await organizationStore.getById(context, {
      id: organizationId,
    });
    if (organization == null) {
      throw new Error("Organization not found.");
    }
    if (
      options?.includeUser === true &&
      organization.userId !== context.userId
    ) {
      throw new Error("Invalid user.");
    }
    if (options?.includeConnectedAccount === true) {
      if (organization.stripeConnectedAccountId == null) {
        throw new Error("Organization does not have Stripe connected account");
      }
      /*
       The isStripeConnectedAccountOnboardingComplete flag is used to indicate 
       whether an organization is finished w/ stripe connected account onboarding.

       If the flag indicates "false", we check manually check whether the user
       is done with onboarding by calling into the Stripe API.
    */
      if (organization.isStripeConnectedAccountOnboardingComplete === false) {
        const { charges_enabled, payouts_enabled } =
          await stripeService.getConnectedAccount(
            organization.stripeConnectedAccountId
          );
        if (charges_enabled == false || payouts_enabled == false) {
          throw new Error(
            "Organization does not have Stripe connected account set up"
          );
        } else {
          await organizationStore.update(context, {
            id: organizationId,
            isStripeConnectedAccountOnboardingComplete: true,
          });
        }
      }
    }

    return organization;
  }
}
