import { useOnboardPlayerMutation } from "../../../__generated__/graphql";
import useCreatePlayerForm from "../../../hooks/useCreatePlayerForm";

function useOnboardPlayer() {
  const playerForm = useCreatePlayerForm();

  const [onboardPlayerMutation, { loading }] = useOnboardPlayerMutation();

  const onboardPlayer = async () => {
    const values = playerForm.values;
    if (playerForm.isValid() && values.ageGroup != null) {
      const response = await onboardPlayerMutation({
        variables: {
          args: {
            firstName: values.firstName,
            lastName: values.lastName,
            ageGroup: Number(values.ageGroup),
            playerContactEmail: values.primaryContactEmail,
            playerContactPhone: values.primaryContactEmail,
          },
        },
      });
      return response;
    }
    return null;
  };

  return { onboardPlayer, loading, playerForm };
}

export default useOnboardPlayer;
