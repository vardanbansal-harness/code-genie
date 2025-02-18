import { cn } from "../utils";
import * as React from "react";

// Utility for handling Tailwind classNames

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full border border-gray-300 rounded-md p-2 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
