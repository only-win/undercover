import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import type { Component } from "@only-win/types/ui";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/utils/fonts";

export const metadata: Metadata = {
  title: "UnderCover"
}

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark bg-[#0F0F12] antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;