import React, { ReactElement } from "react";

interface Props {
  data: any[];
}

export default function Skill({ data }: Props): ReactElement {
  const skills = data.map((x, i) => (
    <div key={i}>
      <div style={{ textAlign: "center" }}>{x.title}</div>
      <div style={{ textAlign: "justify" }}>{x.content}</div>
    </div>
  ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90vw",
        height: "90vh",
      }}
    >
      {skills}
    </div>
  );
}
