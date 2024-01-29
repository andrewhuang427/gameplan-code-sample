import { ProtectedPublicRoute } from "@/guards/ProtectedPublicRoute";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignUp() {
  return (
    <ProtectedPublicRoute>
      <main>
        <SignupForm />
      </main>
    </ProtectedPublicRoute>
  );
}
