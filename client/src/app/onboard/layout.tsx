import { ProtectedRoute } from "@/guards/ProtectedRoute";
import { OnboardContextProvider } from "@/components/onboard/OnboardContext";
import { Navbar } from "@/components/shared/navigation/Navbar";

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute pathType="ONBOARD">
      <OnboardContextProvider>
        <Navbar />
        {children}
      </OnboardContextProvider>
    </ProtectedRoute>
  );
}
