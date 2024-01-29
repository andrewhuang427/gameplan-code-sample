import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloContextProvider } from "@/context/ApolloContext";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme/theme";
import { AuthContextProvider } from "@/context/AuthContext";
import { OrganizationContextProvider } from "../context/OrganizationContext";
import { TeamContextProvider } from "../context/TeamContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gameplan",
  description: "Platform to bridge youth sports teams and organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <ApolloContextProvider>
          <AuthContextProvider>
            <OrganizationContextProvider>
              <TeamContextProvider>
                <MantineProvider theme={theme}>{children}</MantineProvider>
              </TeamContextProvider>
            </OrganizationContextProvider>
          </AuthContextProvider>
        </ApolloContextProvider>
      </body>
    </html>
  );
}
