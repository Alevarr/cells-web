import Header from "@/components/header";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-col items-stretch px-6 mx-auto pb-24">
        <Header />
        {children}
      </div>
      <div className="relative">
        <Image
          className="absolute left-[-24px] bottom-0 z-[-1] hidden md:block"
          width={2332}
          height={1195}
          src="/bottom-spray.svg"
          alt="aboba"
        />
        <Image
          className="absolute left-[-24px] bottom-0 z-[-1] block md:hidden"
          width={2332}
          height={1195}
          src="/bottom-spray-mobile.svg"
          alt="aboba"
        />
      </div>
    </>
  );
}
