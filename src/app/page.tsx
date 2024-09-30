'use client'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.replace("/login");
  };
  return (
    <div>
      <h3>Home</h3>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}