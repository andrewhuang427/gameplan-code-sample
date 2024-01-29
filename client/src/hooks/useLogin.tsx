import { useForm } from "@mantine/form";
import { useLoginMutation } from "@/__generated__/graphql";
import { AUTHENTICATION_TOKEN_KEY } from "@/constants/constants";

export const useLogin = () => {
  const formDetails = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address.",
      password: (value) => (value === "" ? "Enter password." : null),
    },
  });

  const [login, { loading }] = useLoginMutation();

  const handleLogin = async () => {
    const response = await login({
      variables: {
        args: {
          email: formDetails.values.email,
          password: formDetails.values.password,
        },
      },
    });

    if (response.errors == null) {
      const token = response.data?.login?.token;
      if (token != null) {
        localStorage.setItem(AUTHENTICATION_TOKEN_KEY, token);
        return response;
      }
    }
    return null;
  };

  return { handleLogin, formDetails, inFlight: loading };
};
