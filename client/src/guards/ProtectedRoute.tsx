"use client";

import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { UserType } from "../__generated__/graphql";
import { getUserTypePath } from "../utils/NavigationUtils";

type Props = {
  children: ReactNode;
  pathType?: "NORMAL" | "ONBOARD";
  userType?: UserType;
};

export const ProtectedRoute = ({
  children,
  pathType = "NORMAL",
  userType,
}: Props) => {
  const { isLoggedIn, isLoggingIn, user } = useAuth();
  const router = useRouter();

  const isUserOnboarded = user?.isOnboarded ?? false;
  const isNormalPath = pathType === "NORMAL";
  const isOnboardPath = pathType === "ONBOARD";

  const shouldUserBeOnOnboardPath =
    !isLoggingIn && isNormalPath && !isUserOnboarded;
  const isUserOnIncorrectOnboardPath =
    !isLoggingIn && isOnboardPath && isUserOnboarded;
  const isUserOnInvalidUserTypePath =
    !isLoggingIn && user != null && userType != null && user.type !== userType;

  useEffect(() => {
    if (!isLoggingIn && !isLoggedIn) {
      router.push("/login");
    } else if (shouldUserBeOnOnboardPath) {
      router.push("/onboard");
    } else if (isUserOnIncorrectOnboardPath || isUserOnInvalidUserTypePath) {
      router.push(getUserTypePath(user?.type));
    }
  }, [
    isLoggedIn,
    isLoggingIn,
    shouldUserBeOnOnboardPath,
    isUserOnIncorrectOnboardPath,
    isUserOnInvalidUserTypePath,
  ]);

  console.log({
    isLoggedIn,
    isLoggingIn,
    shouldUserBeOnOnboardPath,
    isUserOnIncorrectOnboardPath,
    isUserOnInvalidUserTypePath,
  });

  if (
    !isLoggedIn ||
    isLoggingIn ||
    shouldUserBeOnOnboardPath ||
    isUserOnIncorrectOnboardPath ||
    isUserOnInvalidUserTypePath
  ) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};
