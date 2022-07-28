import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
const FooterRessources = () => {
  return (
    <Grid container  spacing={1}>
      <Grid item xs={12} >
        <Link
          href="/contact"
          target="_blank"
          variant="caption"
          color="text.secondary"
          underline="none"
        >
          Contact us
        </Link>
      </Grid>
      <Grid item xs={12} >
        <Link
          href="/contact"
          target="_blank"
          variant="caption"
          color="text.secondary"
          underline="none"
        >
          Donation
        </Link>
      </Grid>
      <Grid item xs={12} >
        <Link
          href="/contact"
          target="_blank"
          variant="caption"
          color="text.secondary"
          underline="none"
        >
          Purpose
        </Link>
      </Grid>
    </Grid>
  );
};

export default FooterRessources;
