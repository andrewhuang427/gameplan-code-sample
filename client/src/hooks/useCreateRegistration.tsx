import {
  CreateRegistrationMutation,
  useCreateRegistrationMutation,
} from "../__generated__/graphql";

export const useCreateRegistration = (): [
  (args: {
    teamId: number;
    tournamentId: number;
    paymentIntentId: string;
  }) => Promise<CreateRegistrationMutation | null | undefined>,
  boolean
] => {
  const [create, { loading }] = useCreateRegistrationMutation();

  const createRegistration = async (args: {
    teamId: number;
    tournamentId: number;
    paymentIntentId: string;
  }) => {
    const { data, errors } = await create({
      variables: {
        args: {
          teamId: args.teamId,
          tournamentId: args.tournamentId,
          paymentIntentId: args.paymentIntentId,
        },
      },
    });
    if (errors == null || errors.length === 0) {
      return data;
    }
    return null;
  };

  return [createRegistration, loading];
};
