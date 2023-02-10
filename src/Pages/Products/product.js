import React from "react";

const Products = () => {
  const {
    data: news,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNewsQuery();
  let content;
  if (isLoading) {
    content = <CircularProgress size="5em" />;
  } else if (isSuccess) {
    content = (
        {Object.entries(news.result)?.map(([id, data]) => (
          //to do
        ))}
    );
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
