import React from "react";
import { cn } from "../utils";

type VariantStyles = "SpaceBlack" | "SpaceOutline" | "SpaceBlue";

type SpaceButtonProps = {
  buttonText: string;
  className?: string;
  variant?: VariantStyles;
};

export const SpaceButton: React.FC<SpaceButtonProps> = ({
  buttonText,
  className,
  variant,
}) => {
  return (
    <button className={cn(`px-5 py-3 rounded-md ${variant}`, className)}>
      {buttonText}
    </button>
  );
};
