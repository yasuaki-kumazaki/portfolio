"use client";

import { ThemeProvider } from "next-themes";

// reference: https://www.youtube.com/watch?v=7zqI4qMDdg8&ab_channel=DaveGray

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
