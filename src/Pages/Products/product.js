import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import CircularProgress from '@mui/material/CircularProgress';
import { useGetProductsQuery } from "./slice";

import useStyles from "./style";
const Products = () => {
  const classes = useStyles();
  const {
    data: news,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  let content;
  if (isLoading) {
    content = <CircularProgress size="5em" />;
  } else if (isSuccess) {
    console.log("sssss")
  } else if (isError) {
    console.log(error);
    content = <Typography variant="h6">{error.error.toString()}</Typography>;
  }
  return (
    <section id="news" className="posts-list">
      {content}
    </section>
  );
  return (
    <Container className={classes.container}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} align="center">
          <Divider>
            <Typography variant="h5" color="text.primary">
              Products
            </Typography>
          </Divider>
        </Grid>
        {content}
      </Grid>
    </Container>
  );
};

export default Products;
