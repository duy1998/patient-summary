/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TextBox from "../common/TextBox";
import VitalSignBox from "./VitalSignBox";
import { useStyles } from "./PatientSummary.styles";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#545454",
      color: theme.palette.common.white,
      border: "1px solid #1e1e1e",
    },
    body: {
      fontSize: 14,
      border: "1px solid #1e1e1e",
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      "&:nth-of-type(odd)": {
        backgroundColor: "#dfdedede",
      },
      "&:hover": {
        backgroundColor: "#ada6a6de",
      },
    },
  })
)(TableRow);

export default function PatientSummary() {
  const classes = useStyles();

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

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 20px)",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          spacing={1}
          xs={9}
          md={10}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid container spacing={1}>
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
          <fieldset style={{ height: "100%", marginTop: 20 }}>
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
        </Grid>
        <Grid item spacing={0} xs={3} md={2}>
          <div
            style={{
              border: "1px solid",
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
      <div
        style={{
          width: "100%",
          marginTop: 10,
          flex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <fieldset>
          <legend style={{ fontWeight: 700 }}>Lịch sử khám tại Vinmec</legend>
          <TableContainer component={Paper} style={{ maxHeight: "300px" }}>
            <Table
              stickyHeader
              className={classes.table}
              aria-label="simple table"
              style={{ maxHeight: "300px" }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ngày giờ</StyledTableCell>
                  <StyledTableCell align="center">
                    Chuyên khoa khám
                  </StyledTableCell>
                  <StyledTableCell align="center">Bác sĩ</StyledTableCell>
                  <StyledTableCell align="center">Lý do khám</StyledTableCell>
                  <StyledTableCell align="center">
                    Chẩn đoán xác định
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Hướng dẫn điều trị
                  </StyledTableCell>
                  <StyledTableCell align="center">LOS nội trú</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ maxHeight: "300px", overflowY: "auto" }}>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </fieldset>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: 10,
          flex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <fieldset>
          <legend style={{ fontWeight: 700 }}>Lịch sử khám tại Vinmec</legend>
          <TableContainer
            component={Paper}
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            <Table
              stickyHeader
              className={classes.table}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ngày giờ</StyledTableCell>
                  <StyledTableCell align="center">
                    Chuyên khoa khám
                  </StyledTableCell>
                  <StyledTableCell align="center">Bác sĩ</StyledTableCell>
                  <StyledTableCell align="center">Lý do khám</StyledTableCell>
                  <StyledTableCell align="center">
                    Chẩn đoán xác định
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Hướng dẫn điều trị
                  </StyledTableCell>
                  <StyledTableCell align="center">LOS nội trú</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </fieldset>
      </div>
    </div>
  );
}
