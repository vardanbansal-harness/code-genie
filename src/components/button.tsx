import { cn } from "../utils";
import * as React from "react";

// Utility for handling Tailwind classNames

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none",
          variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
          variant === "outline" &&
            "border border-gray-300 text-gray-700 hover:bg-gray-100",
          variant === "ghost" && "text-gray-700 hover:bg-gray-200",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
