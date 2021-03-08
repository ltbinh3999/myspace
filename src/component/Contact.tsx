import React, { ReactElement } from "react";
import i1 from "../img/email.png";
import i2 from "../img/github.png";
import i3 from "../img/linkedin.png";
import i4 from "../img/cv.png";
interface Props {
  data: any;
}

export default function Contact({ data }: Props): ReactElement {
  const imgs = [i1, i2, i3, i4];
  return (
    <div>
      {data.map((x: any, i: number) => (
        <div key={i}>
          <img src={imgs[i]} alt="" className="ImgButton" />
          <a href={x.link} target="_blank" rel="noopener noreferrer">
            {x.text}
          </a>
        </div>
      ))}
    </div>
  );
}
