import React from "react";
import { useStyles } from "./VitalSignBox.styles";

interface VitalSign {
  range: string | undefined;
  value: string | undefined;
}

interface VitalSignBoxProps {
  data: {
    title: string;
    color: string;
    primaryVital: VitalSign;
  };
}
export default function VitalSignBox(props: VitalSignBoxProps) {
  const { title, color, primaryVital } = props.data;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={classes.infoContainer}
        style={{
          background: color,
        }}
      >
        {title}
      </div>
      <div style={{ color: color, fontWeight: 600, margin: "4px 0px" }}>{`${
        primaryVital.value ?? "-"
      }`}</div>
      <div>{`${primaryVital.range ?? ""}`}</div>
    </div>
  );
}
