import React from "react";
import useStyles from "./style";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SocialFooter from './socialFooter';
import InfoFooter from './infoFooter';

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container} justifyContent="center" spacing={2} >
        <SocialFooter/>
        <InfoFooter/>
        <Grid item align="center">
          <Typography variant="caption" color="text.secondary">
            &copy; Portals Hall .All rights reserverd.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
