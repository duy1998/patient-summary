import React from "react";

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

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          background: color,
          padding: "8px 5px",
          fontSize: 14,
          minWidth: 100,
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 25, color: color, fontWeight: 600 }}>{`${
        primaryVital.value ?? "-"
      }`}</div>
      <div style={{ fontSize: 15 }}>{`${primaryVital.range ?? ""}`}</div>
    </div>
  );
}
