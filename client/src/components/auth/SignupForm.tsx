"use client";

import { Button, Center, TextInput, Text, Flex } from "@mantine/core";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { useRouter } from "next/navigation";
import { useSignup } from "../../hooks/useSignup";
import { useReturnToSearchParam } from "../../hooks/useReturnToSearchParam";
import { useRedirectAndRefresh } from "../../hooks/useRedirectAndRefresh";

export const SignupForm = () => {
  const { handleSignup, formDetails, inFlight } = useSignup();
  const router = useRouter();
  const redirectRoute = useReturnToSearchParam();
  const redirectAndRefresh = useRedirectAndRefresh();

  const handleRedirectToLogin = () => {
    router.push(
      `/login${redirectRoute != null ? `?returnTo=${redirectRoute}` : ""}`
    );
  };

  const onSignupClick = async () => {
    const validationResult = formDetails.validate();
    if (!validationResult.hasErrors) {
      const response = await handleSignup();
      if (response != null) {
        redirectRoute != null
          ? redirectAndRefresh(redirectRoute)
          : router.refresh();
      }
    }
  };

  return (
    <Center mt="xl">
      <AuthFormWrapper title="Sign-Up">
        <TextInput label="Name" {...formDetails.getInputProps("name")} />
        <TextInput label="Email" {...formDetails.getInputProps("email")} />
        <TextInput
          type="password"
          label="Password"
          {...formDetails.getInputProps("password")}
        />
        <div className="cursor-pointer" onClick={handleRedirectToLogin}>
          <Flex gap={5}>
            <Text size="sm" c="dimmed">
              Already have an account?
            </Text>
            <Text size="sm" fw={500}>
              Login Here
            </Text>
          </Flex>
        </div>
        <Button
          type="submit"
          variant="filled"
          color="dark"
          loading={inFlight}
          onClick={onSignupClick}
        >
          Sign-Up
        </Button>
      </AuthFormWrapper>
    </Center>
  );
};
