import React, { ReactElement } from "react";

interface Props {
  linkTo: JSX.Element[];
}

export default function Navbar({ linkTo }: Props): ReactElement {
  const nav = ["Landing", "Project", "Skill", "Contact"];
  const links = linkTo.map((x, i) => (
    <a href={`#page${i}`} key={i}>
      {nav[i]}
    </a>
  ));
  console.log(linkTo[0]);

  return <div style={{ position: "fixed" }}>{links}</div>;
}
