import { Component } from "@only-win/types/ui";
import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  color?: string;
  size?: number;
}

export const Icon: Component<IconProps> = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon size={size} color={color} />;
}