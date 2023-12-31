import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    fontSize: "10px",

    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "12px",
    },

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "12px",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
    padding: "10px 10px 20px 10px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontWeight: 800,
    textAlign: "center",
    margin: "0em 1em 2em 1em",
  },
  generalInfoContainer: {
    fontSize: "10px",

    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "10px",
    },

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "12px",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
}));
