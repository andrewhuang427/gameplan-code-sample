import { useSignupMutation } from "@/__generated__/graphql";
import { AUTHENTICATION_TOKEN_KEY } from "@/constants/constants";
import { useForm } from "@mantine/form";

export type SignupFormDataType = {
  name: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  const formDetails = useForm<SignupFormDataType>({
    initialValues: { name: "", email: "", password: "" },
    validate: {
      name: (value) => (value === "" ? "Enter name." : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address.",
      password: (value) =>
        value.length > 6 ? null : "Password must by 7 characters or more.",
    },
  });

  const [signup, { loading }] = useSignupMutation();

  const handleSignup = async () => {
    const response = await signup({
      variables: {
        args: {
          name: formDetails.values.name,
          email: formDetails.values.email,
          password: formDetails.values.password,
        },
      },
    });

    if (response.errors == null) {
      const token = response.data?.signup?.token;
      if (token != null) {
        localStorage.setItem(AUTHENTICATION_TOKEN_KEY, token);
        return response;
      }
    }
    return null;
  };

  return { handleSignup, formDetails, inFlight: loading };
};
