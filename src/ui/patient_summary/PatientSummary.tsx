/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircularProgress, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import gfm from "remark-gfm";
import TextBox from "../common/TextBox";
import VitalSignBox from "./VitalSignBox";
import MTable, { MColumn } from "../common/MTable";
import {
  BLOOD_PRESSURE_INDEX,
  PULSE_INDEX,
  RESPIPATORY_INDEX,
  resultTabs,
  SPO2_INDEX,
  TEMPERATURE_INDEX,
  vitalSignsData,
} from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/rootReducer";
import { ApiStatus } from "src/redux/common/DataState";
import {
  MedicalRecord,
  PatientInfo,
} from "src/redux/patient_summary/patient_summary.state";
import {
  changeResultTabAction,
  fetchPatientSummaryAction,
  getResultsByMedicalRecordAction,
} from "src/redux/patient_summary/patient_summary.action";
import { format } from "date-fns";
import { DATE_TIME_FORMAT } from "src/utils/common";
import ReactMarkdown from "react-markdown";
import { useStyles } from "./PatientSummary.styles";
import { ScreenType, useScreenType } from "src/hook/useScreenType";

const PatientSummary: React.FC = () => {
  const patientInfo: PatientInfo | null = useSelector((state: RootState) =>
    state.patientSummaryReducer.patientSummaryData?.status ===
      ApiStatus.SUCCESS &&
    state.patientSummaryReducer.patientSummaryData?.data?.patientInfo
      ? state.patientSummaryReducer?.patientSummaryData.data.patientInfo
      : null
  );

  const medicalRecords: MedicalRecord[] | null = useSelector(
    (state: RootState) =>
      state.patientSummaryReducer.patientSummaryData?.status ===
        ApiStatus.SUCCESS &&
      state.patientSummaryReducer.patientSummaryData?.data?.medicalRecords
        ? state.patientSummaryReducer?.patientSummaryData.data.medicalRecords
        : null
  );

  const results: Map<string, MedicalRecord[]> | null = useSelector(
    (state: RootState) =>
      state.patientSummaryReducer.patientSummaryData?.status ===
        ApiStatus.SUCCESS &&
      state.patientSummaryReducer.patientSummaryData?.data?.results
        ? state.patientSummaryReducer?.patientSummaryData.data.results
        : null
  );

  const selectedResultTabs: string | null = useSelector((state: RootState) =>
    state.patientSummaryReducer.patientSummaryData?.status ===
      ApiStatus.SUCCESS &&
    state.patientSummaryReducer.patientSummaryData?.data?.selectedResultTabs
      ? state.patientSummaryReducer?.patientSummaryData.data.selectedResultTabs
      : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  const { screenType, parentWidth, parentRef } = useScreenType();

  useEffect(() => {
    dispatch(fetchPatientSummaryAction());
    return () => {};
  }, [dispatch]);

  const reasonElement = (margin?: string) => (
    <div
      style={{
        margin: margin ?? "0px 0px 10px 10px",
        border: "1px solid",
        padding: 5,
        height: "calc(100% - 15px)",
      }}
    >
      <span>Lý do khám: </span>
      <span style={{ fontWeight: 600 }}>
        {patientInfo?.vital?.chronicDisease ?? ""}
      </span>
    </div>
  );

  const medicalRecordColumns: MColumn[] = [
    {
      title: "Ngày giờ",
      align: "center",
      width: "5%",
      renderCell: (data: any) => (
        <p>{format(new Date(data.startDatetime), DATE_TIME_FORMAT)}</p>
      ),
    },
    {
      title: "Chuyên khoa khám",
      align: "center",
      width: "15%",
      renderCell: (data: any) => (
        <Typography variant="body2" noWrap={false}>
          {data.location.specialty}
        </Typography>
      ),
    },
    {
      title: "Bác sĩ",
      align: "center",
      width: "5%",
      renderCell: (data: any) => <p>{data?.diagnosis?.creatorName ?? ""}</p>,
    },
    {
      title: "Lý do khám",
      align: "center",
      width: "20%",
      renderCell: (data: any) => <p>{data?.diagnosis?.diagnosis ?? ""}</p>,
    },
    {
      title: "Chẩn đoán xác định",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{data?.diagnosis?.visitReason ?? ""}</p>,
    },

    {
      title: "Hướng dẫn điều trị",
      align: "center",
      width: "40%",
      renderCell: (data: any) => <p>{data?.diagnosis?.treatmentPlan ?? ""}</p>,
    },
    {
      title: "LOS nội trú",
      align: "center",
      width: "10%",
      renderCell: (data: any) => <p>{1}</p>,
    },
  ];

  const resultColumns: { [key: string]: MColumn[] } = {
    RESULT_TAB_1: [
      {
        title: "Ngày giờ",
        align: "center",
        width: "10%",
        renderCell: (data: any) => (
          <p>{format(new Date(data.encounterDateTime), DATE_TIME_FORMAT)}</p>
        ),
      },
      // {
      //   title: "Loại xét nghiệm",
      //   align: "center",
      //   width: "10%",
      //   renderCell: (data: any) => <p>{data.conceptNameToDisplay}</p>,
      // },
      {
        title: "Tên xét nghiệm / chỉ số",
        align: "center",
        width: "20%",
        renderCell: (data: any) => <p>{data.formFieldPath}</p>,
      },
      // {
      //   title: "Tham chiếu",
      //   align: "center",
      //   width: "10%",
      //   renderCell: (data: any) => <p>{data.ref}</p>,
      // },
      {
        title: "Kết quả",
        align: "center",
        width: "70%",
        renderCell: (data: any) => (
          <ReactMarkdown
            skipHtml={true}
            className="draid-markdown"
            remarkPlugins={[gfm]}
          >
            {data?.value?.replace(/\n/g, "  \n") ?? ""}
          </ReactMarkdown>
        ),
      },
      // {
      //   title: "Đơn vị",
      //   align: "center",
      //   width: "2%",
      //   renderCell: (data: any) => <p>{data.concept.unit ?? ""}</p>,
      // },
    ],
    RESULT_TAB_2: [
      {
        title: "Ngày giờ",
        align: "center",
        width: "10%",
        renderCell: (data: any) => (
          <p>{format(new Date(data.encounterDateTime), DATE_TIME_FORMAT)}</p>
        ),
      },
      {
        title: "Loại chụp",
        align: "center",
        width: "20%",
        renderCell: (data: any) => <p>{data.formFieldPath}</p>,
      },
      {
        title: "Kết quả",
        align: "center",
        width: "70%",
        renderCell: (data: any) => <p>{data.value}</p>,
      },
    ],
    RESULT_TAB_3: [
      {
        title: "Ngày giờ",
        align: "center",
        width: "5%",
        renderCell: (data: any) => (
          <p>{format(new Date(data.encounterDateTime), DATE_TIME_FORMAT)}</p>
        ),
      },
      {
        title: "Loại",
        align: "center",
        width: "10%",
        renderCell: (data: any) => <p>{data.conceptNameToDisplay}</p>,
      },
      {
        title: "Tên / chỉ số",
        align: "center",
        width: "10%",
        renderCell: (data: any) => <p>{data.formFieldPath}</p>,
      },
      {
        title: "Kết quả",
        align: "center",
        width: "10%",
        renderCell: (data: any) => <p>{data.value}</p>,
      },
    ],
    RESULT_TAB_4: [
      {
        title: "Ngày giờ",
        align: "center",
        width: "5%",
        renderCell: (data: any) => (
          <p>{format(new Date(data.visit.startDateTime), DATE_TIME_FORMAT)}</p>
        ),
      },
      {
        title: "Tên",
        align: "center",
        width: "10%",
        renderCell: (data: any) => <p>{data?.drugOrder?.drugNonCoded ?? ""}</p>,
      },
      {
        title: "Cách dùng",
        align: "center",
        width: "10%",
        renderCell: (data: any) => (
          <p>
            {`${data?.dosingInstructions?.dose ?? ""} ${
              data?.dosingInstructions?.doseUnits ?? ""
            }, ${data?.dosingInstructions?.frequency} - ${data?.duration} ${
              data?.durationUnits
            }`}
          </p>
        ),
      },
    ],
  };

  const getRangeFromIndex = (index) => {
    switch (index) {
      case BLOOD_PRESSURE_INDEX: {
        return {
          range: patientInfo?.vital?.bloodPressureNormalRange,
          value: patientInfo?.vital.bloodPressure,
        };
      }
      case PULSE_INDEX: {
        return {
          range: patientInfo?.vital?.pulseNormalRange,
          value: patientInfo?.vital.pulse,
        };
      }
      case SPO2_INDEX: {
        return {
          range: patientInfo?.vital?.saturatedPeripheralOxygenNormalRange,
          value: patientInfo?.vital.saturatedPeripheralOxygen,
        };
      }
      case RESPIPATORY_INDEX: {
        return {
          range: patientInfo?.vital?.temperatureNormalRange,
          value: patientInfo?.vital.temperature,
        };
      }
      case TEMPERATURE_INDEX: {
        return {
          range: patientInfo?.vital?.respiratoryNormalRange,
          value: patientInfo?.vital.respiratory,
        };
      }
    }
    return {
      range: "",
      value: "",
    };
  };

  const vitalSignBoxElement = () => {
    if (screenType === ScreenType.MOBILE) {
    }
    return (
      <fieldset
        style={{
          height: "100%",
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
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
              xs={screenType === ScreenType.DESKTOP ? 8 : 12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {vitalSignsData
                .map((item, index) => {
                  return {
                    ...item,
                    primaryVital: getRangeFromIndex(index),
                  };
                })
                .map((item1) => (
                  <VitalSignBox key={item1.title} data={item1} />
                ))}
            </Grid>
            {screenType === ScreenType.DESKTOP && (
              <Grid item xs={4}>
                {reasonElement()}
              </Grid>
            )}
          </Grid>
        </div>
        {screenType !== ScreenType.DESKTOP && reasonElement("10px 0px")}
      </fieldset>
    );
  };

  return (
    <div className={classes.container} ref={parentRef}>
      <div className={classes.header}>
        {`
        PATIENT SUMMARY - TÓM TẮT THÔNG TIN BỆNH NHÂN - ${
          patientInfo?.display ?? ""
        } - ${patientInfo?.gender === "M" ? "Nam" : "Nữ"} -
        ${patientInfo?.age ?? "-"} tuổi - PID: ${
          patientInfo?.uuid ?? " "
        } - TRUNG BÌNH
      `}
      </div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={9}
          md={10}
          className={classes.generalInfoContainer}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextBox
                text={`Dị ứng: ${
                  patientInfo?.vital?.allergies?.join(",") ?? ""
                }`}
              />
            </Grid>
            <Grid item xs={6}>
              <TextBox
                text={`Bệnh mãn tính: ${
                  patientInfo?.vital?.chronicDisease ?? ""
                }`}
              />
            </Grid>
            <Grid item xs={2}>
              <TextBox text={`Bảo hiểm: ${patientInfo?.insurance ?? ""}`} />
            </Grid>
          </Grid>
          {vitalSignBoxElement()}
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
            <p style={{ fontWeight: 700, margin: 0, fontSize: "1em" }}>
              Đặc điểm bệnh nhân
            </p>
            <div style={{ color: "#ca8517", fontSize: "1em", fontWeight: 700 }}>
              <p>{patientInfo?.vital?.height ?? ""}</p>
              <p>{patientInfo?.vital?.weight ?? ""}</p>
            </div>
            <p style={{ margin: 0, fontSize: "1em" }}>
              {patientInfo?.vital?.chronicDisease ?? ""}
            </p>
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
          {!medicalRecords ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <MTable
              columns={medicalRecordColumns}
              dataList={
                (medicalRecords ?? []).map((row: MedicalRecord) => ({
                  ...row,
                  id: row.uuid,
                  onClickRow: (data: MedicalRecord) => {
                    dispatch(getResultsByMedicalRecordAction(data.uuid));
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
          paddingBottom: 10,
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
          {results && selectedResultTabs && (
            <MTable
              columns={resultColumns[selectedResultTabs]}
              dataList={
                results[selectedResultTabs]?.map((row) => ({
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
};

export default PatientSummary;
