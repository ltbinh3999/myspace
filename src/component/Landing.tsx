import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  roles: string[];
  waitTime: number;
}

export default function Landing({ roles, waitTime }: Props): ReactElement {
  const [curRole, setCurRole] = useState({
    name: "",
    id: 0,
    isFoward: true,
    wait: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      const newRole = { ...curRole };
      if (
        curRole.name.length === roles[curRole.id].length &&
        curRole.isFoward
      ) {
        if (curRole.wait < waitTime) {
          newRole.wait += 1;
        } else {
          newRole.wait = 0;
          newRole.isFoward = false;
        }
      } else if (curRole.name.length === 0 && !curRole.isFoward) {
        newRole.id = curRole.id === roles.length - 1 ? 0 : curRole.id + 1;
        newRole.isFoward = true;
      } else {
        newRole.name = roles[curRole.id].substring(
          0,
          curRole.name.length + (curRole.isFoward ? 1 : -1)
        );
      }

      setCurRole(newRole);
    }, 100);
  }, [curRole, roles, waitTime]);

  return (
    <div style={{ width: "80%", textAlign: "center" }}>
      <div>Hello, I am</div>
      <div>{curRole.name}|</div>
      <div>Welcome to my space</div>
    </div>
  );
}
