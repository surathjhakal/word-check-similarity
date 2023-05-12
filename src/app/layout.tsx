import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type layoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: layoutProps) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body
        className={"min-h-screen bg-slate-50 dark:bg-slate-900 antialiased"}
      >
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
        </Providers>
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
