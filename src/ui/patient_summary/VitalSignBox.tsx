import React from "react";

interface VitalSign {
  min: number;
  max: number;
  value: number;
}

interface VitalSignBoxProps {
  data: {
    title: string;
    color: string;
    primaryVital: VitalSign;
    secondVital?: VitalSign;
  };
}
export default function VitalSignBox(props: VitalSignBoxProps) {
  const { title, color, primaryVital, secondVital } = props.data;

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
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 25, color: color, fontWeight: 600 }}>{`${
        primaryVital.value ?? "-"
      }${secondVital ? ` / ${secondVital.value}` : ""}`}</div>
      <div style={{ fontSize: 15 }}>{`${primaryVital.min} - ${
        primaryVital.max
      }${
        secondVital ? ` | ${secondVital.min} - ${secondVital.max}` : ""
      }`}</div>
    </div>
  );
}
