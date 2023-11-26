import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  makeStyles,
  createStyles,
  TableCell,
  Theme,
  withStyles,
} from "@material-ui/core";
import React, { ReactElement } from "react";

export const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
}));

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
    root: {
      padding: 0,
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

export interface MColumn {
  title: string;
  align: "left" | "right" | "inherit" | "center" | "justify" | undefined;
  width: any;
  renderCell: (data: any) => ReactElement;
}

interface MTableData {
  id: any;
  [key: string]: any;
  onClickRow: (data: any) => void;
}

interface MTableProps {
  columns: MColumn[];
  dataList: MTableData[];
}

export default function MTable(props: MTableProps) {
  const classes = useStyles();

  const { columns, dataList } = props;

  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "300px", overflowY: "auto" }}
    >
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.title}
                align={column.align}
                width={column.width}
              >
                {column.title}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {dataList.map((data) => (
            <StyledTableRow
              key={data.id}
              onClick={() => {
                if (data.onClickRow) {
                  data.onClickRow(data);
                }
              }}
            >
              {columns.map((column) => (
                <StyledTableCell key={data.id + column.title} align="center">
                  {column.renderCell(data)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
