import React from "react";

interface Props {
  imgCssClass: string;
  btnCssClass: string;
  svg: string;
  onPressed: () => void;
}

export const PickerContainer: React.FC<Props> = ({
  imgCssClass,
  btnCssClass,
  svg,
  onPressed,
}) => {
  return (
    <button className={btnCssClass} onClick={onPressed}>
      <img src={svg} alt="" className={imgCssClass} />
    </button>
  );
};
