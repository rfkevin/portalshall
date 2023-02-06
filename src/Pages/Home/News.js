import React from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@mui/material/styles";
import { useGetNewsQuery } from "./slice";
import useMediaQuery from "@mui/material/useMediaQuery";
import NewCard from './NewsCard';
import 'swiper/css';

const News = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
      <Swiper
        spaceBetween={30}
        slidesPerView={isMobile ? 1 : 3}
      >
        {Object.entries(news.result)?.map(([id, data]) => (
          <SwiperSlide key={id}>
            <NewCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
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
};

export default News;
