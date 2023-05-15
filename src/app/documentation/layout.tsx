import "@/styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="pt-20 dark:text-slate-50">{children}</section>;
};

export default RootLayout;
