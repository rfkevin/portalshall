import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FooterRessources from './socialFooterInfo/FooterRessources';
const InfoFooter = () => {
  return (
    <Grid item container justifyContent="center" spacing={4}>
      <Grid item xs={3} align="center" >
        <Typography variant="body1">Ressource</Typography>
        <FooterRessources/>
      </Grid>
      <Grid item xs={3} align="center">
        <Typography variant="body1">Products</Typography>
      </Grid>
      <Grid item xs={3} align="center">
        <Typography variant="body1">Terms</Typography>
      </Grid>
      <Grid item xs={3} align="center">
        <Typography variant="body1">About us</Typography>
      </Grid>
    </Grid>
  );
};

export default InfoFooter;
