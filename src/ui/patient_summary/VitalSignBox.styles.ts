import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  infoContainer: {
    minWidth: 100,

    [theme.breakpoints.between("sm", "md")]: {
      minWidth: 80,
    },

    [theme.breakpoints.between("md", "lg")]: {
      minWidth: 100,
    },

    [theme.breakpoints.up("lg")]: {
      minWidth: 120,
    },
    padding: "8px 5px",
    textAlign: "center",
    fontWeight: 600,
  },
}));
