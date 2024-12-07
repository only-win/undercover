import type { Component } from "@only-win/types/ui";
import type { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import icons from "lucide-react/dynamicIconImports";

export type IconName = keyof typeof icons;

export type IconProps = LucideProps & {
  name: IconName;
}

export const Icon: Component<IconProps> = ({ name, ...props }) => {
  const LucideIcon = dynamic(icons[name]);

  return <LucideIcon {...props} />;
}