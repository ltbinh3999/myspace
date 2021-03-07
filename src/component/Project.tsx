import React, { ReactElement, useState } from "react";
//HACK: static import
import i1 from "../img/1.jpg";
import i2 from "../img/2.jpg";
import i3 from "../img/3.jpg";
import iBack from "../img/back.png";
import iNext from "../img/next.png";

import "./Project.css";
interface Props {
  imgPath: string[];
}

export default function Project({ imgPath }: Props): ReactElement {
  const [images, setImages] = useState([i1, i2, i3]);
  return (
    <div>
      <input
        type="image"
        src={iBack}
        alt="back-button"
        className="ImgButton"
        onClick={() => {
          const newImages = [...images];
          newImages.push(newImages.shift() as string);
          setImages(newImages);
        }}
      />
      <img src={images[0]} className="SubItem" alt="left-item"></img>
      <img src={images[1]} className="Item" alt="middle-item"></img>
      <img src={images[2]} className="SubItem" alt="right-Item"></img>
      <input
        type="image"
        src={iNext}
        alt="next-button"
        className="ImgButton"
        onClick={() => {
          const newImages = [...images];
          newImages.unshift(newImages.pop() as string);
          setImages(newImages);
        }}
      />
    </div>
  );
}
