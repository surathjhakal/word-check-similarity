"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  children: ReactNode;
  session: Session | null;
};

const Providers = ({ children, session }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SessionProvider session={session}>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
