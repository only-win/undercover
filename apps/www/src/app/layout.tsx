import { Component } from "@only-win/types/ui";
import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "UnderCover"
}

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;