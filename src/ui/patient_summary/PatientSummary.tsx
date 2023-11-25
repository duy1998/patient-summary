import Grid from "@material-ui/core/Grid";
import React from "react";
import TextBox from "../common/TextBox";
import VitalSignBox from "./VitalSignBox";

export default function PatientSummary() {
  const vitalSignsData = [
    {
      title: "Huyết áp (mmmHg)",
      color: "#eb9d20",
      primaryVital: { max: 90, min: 165, value: 120 },
      secondVital: { max: 90, min: 165, value: 120 },
    },
    {
      title: "Mạch",
      color: "#eb9d20",
      primaryVital: { max: 90, min: 165, value: 120 },
    },
    {
      title: "SpO2",
      color: "#eb9d20",
      primaryVital: { max: 90, min: 165, value: 120 },
    },
    {
      title: "Nhịp thở",
      color: "#eb9d20",
      primaryVital: { max: 90, min: 165, value: 120 },
    },
    {
      title: "Nhiệt độ",
      color: "#eb9d20",
      primaryVital: { max: 90, min: 165, value: 120 },
    },
  ];
  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      <Grid
        item
        container
        spacing={1}
        xs={9}
        md={10}
        style={{ flexDirection: "column" }}
      >
        <Grid item container spacing={1}>
          <Grid item xs={4}>
            <TextBox text={"Dị ứng: "} />
          </Grid>
          <Grid item xs={6}>
            <TextBox text={"Bệnh mãn tính: "} />
          </Grid>
          <Grid item xs={2}>
            <TextBox text={"Bảo hiểm: "} />
          </Grid>
        </Grid>
        <div style={{ width: "100%", height: 301, flex: 2 }}>
          <fieldset style={{ height: "100%" }}>
            <legend style={{ fontWeight: 700 }}>Lần khám hiện tại</legend>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
              }}
            >
              <Grid container spacing={6}>
                <Grid
                  item
                  xs={9}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {vitalSignsData.map((item) => (
                    <VitalSignBox data={item} />
                  ))}
                </Grid>
                <Grid item xs={3}>
                  <div
                    style={{
                      margin: "0px 0px 10px 10px",
                      border: "1px solid",
                      padding: 5,
                      height: "calc(100% - 15px)",
                    }}
                  >
                    Lý do khám:
                  </div>
                </Grid>
              </Grid>
            </div>
          </fieldset>
        </div>
      </Grid>
      <Grid item spacing={0} xs={3} md={2}>
        <div
          style={{
            border: "1px solid",
            height: "100%",
            padding: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: 700, margin: 0 }}>Đặc điểm bệnh nhân</p>
          <div style={{ color: "#ca8517", fontSize: 20, fontWeight: 700 }}>
            <p>60 cm</p>
            <p>12 kg</p>
          </div>
          <p>Gặp vấn đề khó nghe</p>
        </div>
      </Grid>
    </Grid>
  );
}
