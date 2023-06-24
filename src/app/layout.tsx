import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Session } from "next-auth";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type layoutProps = {
  children: ReactNode;
  session: Session;
};

export default function RootLayout({ children, session }: layoutProps) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body
        className={"min-h-screen bg-slate-50 dark:bg-slate-900 antialiased"}
      >
        <Providers session={session}>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="bottom-right" />
          <MobileMenu />
          <main>{children}</main>
        </Providers>
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
