import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    bottom: 0,
    position: "absolute",
    padding: theme.spacing(3),
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  icons: {
    color: theme.palette.text.secondary
  },
}));
