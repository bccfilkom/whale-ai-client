"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "sonner";
export default function AppSignOut() {
  useEffect(() => {
    toast.success("Logged out");
    signOut({
      callbackUrl: "/",
    });
  }, []);

  return null;
}
