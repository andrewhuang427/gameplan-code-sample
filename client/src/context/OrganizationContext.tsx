"use client";

import {
  OrganizationFragment,
  useGetOrganizationQuery,
} from "@/__generated__/graphql";
import { ReactNode, createContext, useContext } from "react";

type OrganizationContextType = {
  organization: OrganizationFragment | null | undefined;
};

const defaultOrganizationContextValue: OrganizationContextType = {
  organization: null,
};

export const OrganizationContext = createContext<OrganizationContextType>(
  defaultOrganizationContextValue
);

type OrganizationContextProviderProps = {
  children: ReactNode;
};

export function OrganizationContextProvider({
  children,
}: OrganizationContextProviderProps) {
  const { data } = useGetOrganizationQuery();

  const organizationFragment = data?.getOrganization;

  return (
    <OrganizationContext.Provider
      value={{ organization: organizationFragment }}
    >
      {children}
    </OrganizationContext.Provider>
  );
}

export const useOrganizationContext = () => {
  return useContext(OrganizationContext);
};
