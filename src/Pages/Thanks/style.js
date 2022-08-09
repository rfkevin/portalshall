import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: 50,
    minHeight: "100vh",
  },
  item:{
     '& span': {
       fontWeight: 700,
     }
  },
  purple:{
    color:"#BA4CFF",
  },
  red:{
    color:"#FF0000"
  },
  blue:{
    color:"#66B2FF"
  }
}));
