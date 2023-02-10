import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useStyles from "./style";

const Thanks = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} align="center">
            <Typography
              variant="h2"
              color="text.primary"
              className={classes.item}

            >
              <span className={classes.purple}> THANK YOU </span>
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography
              variant="h2"
              color="text.primary"
              className={classes.item}
            >
              <span className={classes.blue}>FOR YOUR </span>
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography
              variant="h2"
              color="text.primary"
              className={classes.item}
            >
              <span className={classes.red}>SUPPORT</span>
            </Typography>
          </Grid>
        </Grid>
    </Container>
  );
};

export default Thanks;
