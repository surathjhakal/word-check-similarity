import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function StringCompare(a: String, b: String): number {
  if (a == b) return 100;
  if (a.length == 0 || b.length == 0) return 0;
  const maxLen = a.length > b.length ? a.length : b.length;
  const minLen = a.length < b.length ? a.length : b.length;
  let sameCharAtIndex = 0;
  for (
    let i = 0;
    i < minLen;
    i++ //Compare char by char
  ) {
    if (a[i] == b[i]) {
      sameCharAtIndex++;
    }
  }
  return parseFloat(((sameCharAtIndex / maxLen) * 100).toFixed(2));
}
