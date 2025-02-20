import { cn } from "../utils";
import React from "react";

interface ShadCNWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ShadCNWrapper: React.FC<ShadCNWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("shadcn-wrapper", className)} {...props}>
      {children}
    </div>
  );
};
