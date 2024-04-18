import { PropsWithChildren } from "react";

export default function BottomGradient({ children }: PropsWithChildren) {
  return (
    <div className="pb-[3px] bg-gradient-to-r from-transparent via-primary to-transparent w-96">
      <h2 className="text-primary-dark bg-white pb-2 text-center text-lg">
        {children}
      </h2>
    </div>
  );
}
