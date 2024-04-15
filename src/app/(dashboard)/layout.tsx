import Header from "@/components/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Header />
      {children}
      {/* <div className="flex h-screen overflow-hidden">
        <main className="w-full pt-16">
          <ScrollArea className="h-full">
            <div className="p-4 md:p-8">{children}</div>
          </ScrollArea>
        </main>
      </div> */}
    </div>
  );
}
