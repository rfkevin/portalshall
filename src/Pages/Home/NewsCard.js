import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const NewsCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 400,  minHeight:400}}>
      <CardMedia
        component="img"
        height="200"
        image={data.image}
        alt={data.title}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
