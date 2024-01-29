"use client";

import { UserFragment, useMeQuery } from "@/__generated__/graphql";
import { AUTHENTICATION_TOKEN_KEY } from "@/constants/constants";
import { isNil } from "lodash";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  user: UserFragment | null | undefined;
  logout: () => void;
};

const defaultAuthContextValue: AuthContextType = {
  isLoggedIn: false,
  isLoggingIn: false,
  user: null,
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(
  defaultAuthContextValue
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem(AUTHENTICATION_TOKEN_KEY);
    router.refresh();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !loading && !isNil(data?.me),
        isLoggingIn: loading,
        user: data?.me,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
