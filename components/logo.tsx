"use client";

import Image from "next/image";
import { FC } from "react";
import { useTheme } from "next-themes";

export interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: FC<LogoProps> = ({ className, width = 150, height = 50 }) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  return (
    <Image
      src={currentTheme === "dark" ? "/Logo-Dark.png" : "/Logo-Light.png"}
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;