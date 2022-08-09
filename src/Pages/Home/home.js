import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import News from './News';
import useStyles from "./style";


const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} align="center" className={classes.item}>
          <img
            src="/assets/PortalsHall.png"
            alt="logo"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <Typography
            variant="h4"
            color="text.primary"
            className={classes.item}
          >
            <span className={classes.purple}> Portals Hall </span> is several{" "}
            <span className={classes.blue}> web and mobile application </span>
            designed to facilitate your access to differents{" "}
            <span className={classes.red}> areas of life</span>
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Divider>
            <Typography variant="h5" color="text.primary">
              {" "}
              Company News
            </Typography>
          </Divider>
          </Grid>
          <Grid item xs={12} align="center">
          <News/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
