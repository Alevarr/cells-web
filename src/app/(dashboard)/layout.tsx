import Header from "@/components/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-stretch px-6 mx-auto">
      <Header />
      {children}
    </div>
  );
}
