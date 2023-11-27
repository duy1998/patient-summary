/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircularProgress, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import TextBox from "../common/TextBox";
import VitalSignBox from "./VitalSignBox";
import MTable, { MColumn } from "../common/MTable";
import { resultTabs, vitalSignsData } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/rootReducer";
import { ApiStatus, DataState } from "src/redux/common/DataState";
import {
  MedicalRecord,
  PatientInfo,
} from "src/redux/patient_summary/patient_summary.state";
import {
  changeResultTabAction,
  fetchMedicalRecordsAction,
  fetchResultsAction,
} from "src/redux/patient_summary/patient_summary.action";

export default function PatientSummary() {
  const patientInfo: PatientInfo | null = useSelector((state: RootState) =>
    state.patientSummaryReducer.patientInfo?.status === ApiStatus.SUCCESS &&
    state.patientSummaryReducer.patientInfo.data
      ? state.patientSummaryReducer.patientInfo.data
      : null
  );

  const medicalRecords: DataState<MedicalRecord[]> | null = useSelector(
    (state: RootState) => state.patientSummaryReducer.medicalRecords
  );

  const results: DataState<Map<string, MedicalRecord[]>> | null = useSelector(
    (state: RootState) => state.patientSummaryReducer.results
  );

  const selectedResultTabs: string | null = useSelector(
    (state: RootState) => state.patientSummaryReducer.selectedResultTabs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicalRecordsAction());
  }, [dispatch]);

  const medicalRecordColumns: MColumn[] = [
    {
      title: "Chuyên khoa khám",
      align: "center",
      width: "15%",
      renderCell: (data: any) => (
        <Typography variant="body2" noWrap={false}>
          {data.name}
        </Typography>
      ),
    },
    {
      title: "Bác sĩ",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.calories}</p>,
    },
    {
      title: "Lý do khám",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.fat}</p>,
    },
    {
      title: "Chẩn đoán xác định",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.carbs}</p>,
    },

    {
      title: "Hướng dẫn điều trị",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.protein}</p>,
    },
    {
      title: "LOS nội trú",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.protein}</p>,
    },
  ];

  const resultColumns: MColumn[] = [
    {
      title: "Ngày giờ",
      align: "center",
      width: "15%",
      renderCell: (data: any) => <p>{data.date}</p>,
    },
    {
      title: "Loại xét nghiệm",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.type}</p>,
    },
    {
      title: "Tên xét nghiệm / chỉ số",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.name}</p>,
    },
    {
      title: "Tham chiếu",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.ref}</p>,
    },

    {
      title: "Kết quả",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.result}</p>,
    },
    {
      title: "Đơn vị",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data.unit}</p>,
    },
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
      <div
        style={{
          fontWeight: 800,
          textAlign: "center",
          fontSize: 16,
          margin: "0px 10px 20px 10px",
        }}
      >
        {`
        PATIENT SUMMARY - TÓM TẮT THÔNG TIN BỆNH NHÂN - ${patientInfo?.fullName} - ${patientInfo?.gender} -
        ${patientInfo?.age} tuổi - PID: ${patientInfo?.pid} - TRUNG BÌNH
      `}
      </div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={9}
          md={10}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextBox text={`Dị ứng: ${patientInfo?.allergy}`} />
            </Grid>
            <Grid item xs={6}>
              <TextBox
                text={`Bệnh mãn tính: ${patientInfo?.chronicDiseases}`}
              />
            </Grid>
            <Grid item xs={2}>
              <TextBox text={`Bảo hiểm: ${patientInfo?.insurance}`} />
            </Grid>
          </Grid>
          <fieldset style={{ height: "100%", marginTop: 10 }}>
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
                  xs={8}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {vitalSignsData.map((item) => (
                    <VitalSignBox key={item.title} data={item} />
                  ))}
                </Grid>
                <Grid item xs={4}>
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
        <Grid item xs={3} md={2}>
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
            <div style={{ color: "#ca8517", fontSize: 18, fontWeight: 700 }}>
              <p>60 cm</p>
              <p>12 kg</p>
            </div>
            <p style={{ margin: 0, fontSize: 15 }}>{patientInfo?.symptom}</p>
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
        <fieldset style={{ height: "100%" }}>
          <legend style={{ fontWeight: 700 }}>Lịch sử khám tại Vinmec</legend>
          {medicalRecords?.status === ApiStatus.LOADING ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <MTable
              columns={medicalRecordColumns}
              dataList={
                medicalRecords?.data.map((row) => ({
                  ...row,
                  id: row.id,
                  onClickRow: (data: any) => {
                    dispatch(fetchResultsAction());
                  },
                })) || []
              }
            />
          )}
        </fieldset>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: 10,
          flex: 2,
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
        }}
      >
        <fieldset style={{ height: "100%" }}>
          <legend style={{ fontWeight: 700 }}>Các kết quả</legend>
          <Grid container spacing={0}>
            {resultTabs.map((tab) => (
              <Grid key={tab.id} item xs={3}>
                <div
                  style={{
                    border: "1px solid",
                    padding: "10px 10px",
                    textAlign: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    cursor: "pointer",
                    borderColor: "#000",
                    color: selectedResultTabs === tab.id ? "#fff" : "#000",
                    backgroundColor:
                      selectedResultTabs === tab.id ? "#545454" : "#e3e2e2",
                  }}
                  onClick={() => {
                    dispatch(changeResultTabAction(tab.id));
                  }}
                >
                  {tab.title}
                </div>
              </Grid>
            ))}
          </Grid>
          {results &&
            results.status === ApiStatus.SUCCESS &&
            selectedResultTabs && (
              <MTable
                columns={resultColumns}
                dataList={
                  results.data[selectedResultTabs]?.map((row) => ({
                    ...row,
                    id: row.id,
                  })) || []
                }
              />
            )}
        </fieldset>
      </div>
    </div>
  );
}
