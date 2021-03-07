import React, { ReactElement } from "react";

interface Props {
  data: any[];
}

export default function Skill({ data }: Props): ReactElement {
  const skills = data.map((x) => (
    <div>
      <span>{x.title}</span>
      <span>{x.content}</span>
    </div>
  ));
  return <div>{skills}</div>;
}
