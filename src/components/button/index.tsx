import { FC } from "react";

type backGroundColor = {
  cayn: "cayn-500";
  red: "red-500";
  blue: "blue-500";
};

type BackGroundHoverColor = {
  cayn: "cayn-600";
  red: "red-600";
  blue: "blue-600";
};

type SpaceButtonProps = {
  buttonText: string;
  backGroundColor: backGroundColor;
  backGroundHoverColor: BackGroundHoverColor;
};

const SpaceButton: FC<SpaceButtonProps> = ({
  buttonText,
  backGroundColor,
  backGroundHoverColor,
}) => {
  return (
    <button
      className={`bg-${backGroundColor} hover:bg-${backGroundHoverColor} px-5 py-3 rounded-md`}
    >
      {buttonText}
    </button>
  );
};

export default SpaceButton;
