"use client";
import { Button, Center, TextInput, Text, Flex } from "@mantine/core";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { useRouter } from "next/navigation";
import { useLogin } from "../../hooks/useLogin";
import { useReturnToSearchParam } from "../../hooks/useReturnToSearchParam";
import { useRedirectAndRefresh } from "../../hooks/useRedirectAndRefresh";

export const LoginForm = () => {
  const { formDetails, handleLogin, inFlight } = useLogin();
  const router = useRouter();
  const redirectRoute = useReturnToSearchParam();
  const redirectAndRefresh = useRedirectAndRefresh();

  const handleRedirectToSignupForm = () => {
    router.push(
      `/signup${redirectRoute != null ? `?returnTo=${redirectRoute}` : ""}`
    );
  };

  const onLoginClick = async () => {
    const validationResult = formDetails.validate();
    if (!validationResult.hasErrors) {
      const response = await handleLogin();
      if (response != null) {
        redirectRoute != null
          ? redirectAndRefresh(redirectRoute)
          : router.refresh();
      }
    }
  };

  return (
    <Center mt="xl">
      <AuthFormWrapper title="Login">
        <TextInput label="Email" {...formDetails.getInputProps("email")} />
        <TextInput
          type="password"
          label="Password"
          {...formDetails.getInputProps("password")}
        />
        <div className="cursor-pointer" onClick={handleRedirectToSignupForm}>
          <Flex gap={5}>
            <Text size="sm" c="dimmed">
              New to GamePlan?
            </Text>
            <Text size="sm" fw={500}>
              Register Here
            </Text>
          </Flex>
        </div>
        <Button
          type="submit"
          variant="filled"
          color="dark"
          loading={inFlight}
          onClick={onLoginClick}
        >
          Login
        </Button>
      </AuthFormWrapper>
    </Center>
  );
};
