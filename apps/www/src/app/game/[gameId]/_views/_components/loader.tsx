import type { Component } from "@only-win/types/ui";
import { LoaderCircle } from "lucide-react";

export const Loader: Component = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoaderCircle className="size-16 animate-spin" />
    </div>
  );
}