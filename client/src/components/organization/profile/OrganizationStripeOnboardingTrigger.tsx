import { Box, Button } from "@mantine/core";
import { IconLink } from "@tabler/icons-react";
import { useOnboardOrganizationToStripeMutation } from "../../../__generated__/graphql";
import { useOrganizationContext } from "../../../context/OrganizationContext";

function OrganizationStripeOnboardingTrigger() {
  const { organization } = useOrganizationContext();
  const [onboardToStripe, { loading }] =
    useOnboardOrganizationToStripeMutation();

  const initiateOnboarding = async () => {
    if (organization != null) {
      const response = await onboardToStripe({
        variables: {
          args: {
            id: organization.id,
          },
        },
      });
      const data = response.data?.onboardOrganizationToStripe;
      if (data != null) {
        window.location.replace(data.url);
      }
    }
  };

  return (
    <Button
      onClick={initiateOnboarding}
      loading={loading}
      leftSection={<IconLink />}
      variant="light"
    >
      Connect to Stripe
    </Button>
  );
}

export default OrganizationStripeOnboardingTrigger;
