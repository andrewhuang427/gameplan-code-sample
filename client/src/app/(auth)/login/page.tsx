import { ProtectedPublicRoute } from "@/guards/ProtectedPublicRoute";
import { LoginForm } from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <ProtectedPublicRoute>
      <main>
        <LoginForm />
      </main>
    </ProtectedPublicRoute>
  );
}
