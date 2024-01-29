"use client";

import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { getUserTypePath } from "../utils/NavigationUtils";

type Props = {
  children: ReactNode;
};

export const ProtectedPublicRoute = ({ children }: Props) => {
  const { isLoggedIn, isLoggingIn, user } = useAuth();
  const router = useRouter();

  const isOnboarded = user?.isOnboarded;

  useEffect(() => {
    if (!isLoggingIn && isLoggedIn) {
      const redirectRoute =
        isOnboarded === true ? getUserTypePath(user?.type) : "/onboard";
      router.push(redirectRoute);
    }
  }, [isLoggedIn, isLoggingIn]);

  if (isLoggedIn || isLoggingIn) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};
