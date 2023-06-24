"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/toast";

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignOutButtonProps {}

const SignOutButton = ({}: SignOutButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
