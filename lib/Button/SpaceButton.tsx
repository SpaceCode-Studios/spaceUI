import React, { ReactNode } from "react";
import { cn } from "../utils";

type VariantStyles =
  | "SpaceBlack"
  | "SpaceOutline"
  | "SpaceBlue"
  | "SpaceRed"
  | "SpaceOrange";

type SpaceButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: VariantStyles;
};

export const SpaceButton: React.FC<SpaceButtonProps> = ({
  children,
  className,
  variant,
}) => {
  return (
    <button
      className={cn(
        `px-5 py-3 rounded-md text-sm font-thin ${variant}`,
        className
      )}
    >
      {children}
    </button>
  );
};
