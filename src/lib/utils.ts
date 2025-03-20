
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleResourceDownload(filename: string) {
  // Check if file exists in the public folder
  const publicPath = `/assets/${filename}`;
  
  // Create a new anchor element to trigger download
  const link = document.createElement('a');
  link.href = publicPath;
  link.target = '_blank';
  link.download = filename;
  
  // Append to the document body, click it, and then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
