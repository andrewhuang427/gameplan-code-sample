"use client";
import { AUTHENTICATION_TOKEN_KEY } from "@/constants/constants";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

type ApolloContextProviderProps = {
  children: React.ReactNode;
};
const authLink = setContext(() => {
  const token = localStorage.getItem(AUTHENTICATION_TOKEN_KEY);
  return {
    headers: {
      authorization: token,
    },
  };
});

export const ApolloContextProvider = ({
  children,
}: ApolloContextProviderProps) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(createHttpLink({ uri: "http://localhost:4000" })),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
