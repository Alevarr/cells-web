import * as React from "react";

import { cn } from "@/lib/utils";
import { useState } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showInputLength?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, showInputLength, onChange, maxLength, ...props }, ref) => {
    const [count, setCount] = useState(0);
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea";

export { Textarea };
