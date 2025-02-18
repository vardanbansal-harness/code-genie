import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge.
 * - `clsx` helps with conditional class merging.
 * - `tailwind-merge` prevents class conflicts in TailwindCSS.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
