// /app/login/page.js
"use client";
import { auth } from "../../firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const login = async () => {
    const userCred = await signInWithEmailAndPassword(auth, "admin@admin.com", "123456");
    document.cookie = "admin=true";
    router.push("/admin");
  };

  return (
    <div>
      <h1>Login Admin</h1>
      <button onClick={login}>Iniciar sesión</button>
    </div>
  );
}
