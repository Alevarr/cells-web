import * as React from "react";

import { cn } from "@/lib/utils";
import { useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showInputLength?: boolean;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type,
      showInputLength,
      onChange,
      maxLength,
      ...props
    },
    ref
  ) => {
    const [count, setCount] = useState(0);
    return (
      <div className={cn("relative", containerClassName)}>
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-common border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          onChange={(e) => {
            setCount(e.target.value.length);
            onChange && onChange(e);
          }}
          maxLength={maxLength}
          {...props}
        />
        {showInputLength && maxLength && (
          <span className="absolute bottom-2 right-2 text-[10px] text-muted-foreground">
            {count + "/" + maxLength}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
