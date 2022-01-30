import React from "react";
import { images } from "../assets";

const ImageAsset = (props) => {
  const { src, className, onClick, style } = props;

  return (
    <img
      alt="icon"
      src={images[src]}
      className={`${className}`}
      onClick={onClick}
      style={style}
    />
  );
};

export default ImageAsset;
