import React from "react";

interface TextBoxProps {
  text: string | null | undefined;
}

export default function TextBox(props: TextBoxProps) {
  const { text } = props;

  return (
    <div style={{ fontWeight: 700, border: "1px solid", padding: 4 }}>
      {text}
    </div>
  );
}
