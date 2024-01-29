import { useOnboardOrganizationMutation } from "../../../__generated__/graphql";
import { useCreateOrganizationForm } from "../../../hooks/useCreateOrganizationForm";

function useOnboardOrganization() {
  const organizationForm = useCreateOrganizationForm();

  const [onboardOrgMutation, { loading }] = useOnboardOrganizationMutation();

  const onboardOrganization = async () => {
    const values = organizationForm.values;
    if (organizationForm.isValid() && values.sport != null) {
      const response = await onboardOrgMutation({
        variables: {
          args: {
            name: values.name,
            sport: values.sport,
            address: values.address,
          },
        },
      });
      return response;
    }
    return null;
  };

  return { organizationForm, onboardOrganization, loading };
}

export default useOnboardOrganization;
