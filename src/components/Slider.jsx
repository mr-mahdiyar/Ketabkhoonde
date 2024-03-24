import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Image from "../assets/BooksImages/01.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const staticSliderItem = () => {
  return (
    <Box
      className="image-text-container"
      component="div"
      display="flex"
      flexDirection={{xs: "column", sm: "row"}}
      justifyContent="space-between"
      alignItems="center"
      border="1px solid white"
      padding={2}
      borderRadius={3}
    >
      <Box className="image-container" maxWidth={{xs: "75%" ,sm: "40%"}}>
        <img src={Image} className="w-100" />
      </Box>
      <Box className="text-wrapper" minWidth="50%" marginLeft="1rem">
        <List>
          <ListItem>
            <ListItemText primary="نام کتاب: " />
            <ListItemText
              primary="دنیای سوفی"
              primaryTypographyProps={{textAlign: "start", marginRight: "0.4rem", fontSize: {xs: "16px", sm: "18px"}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="نویسنده: " />
            <ListItemText
              primary="بوستین گردر"
              primaryTypographyProps={{textAlign: "start", marginRight: "0.4rem", fontSize: {xs: "16px", sm: "18px"}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="تعداد صفحات: "
              sx={{ marginLeft: "0.1rem" }}
            />
            <ListItemText
              primary="325"
              primaryTypographyProps={{textAlign: "start", marginRight: "0.4rem", fontSize: {xs: "16px", sm: "18px"}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="قیمت: " />
            <ListItemText
              primary="324 هزار تومان"
              primaryTypographyProps={{textAlign: "start", marginRight: "0.4rem", fontSize: {xs: "16px", sm: "18px"}}}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
const Slider = () => {
  return (
    <div>
      <Box
        component="div"
        bgcolor="customBlue.main"
        padding={2}
        marginTop={0.5}
        minHeight="15rem"
      >
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          initialSlide={2}
          centeredSlides
          centeredSlidesBounds
          freeMode
          breakpoints={{
            300: {
              slidesPerView: 1.4
            }, 
            900: {
              slidesPerView: 1.75
            },
            1300: {
              slidesPerView: 3.5
            }
          }}
        >
          <SwiperSlide>{staticSliderItem()}</SwiperSlide>

          <SwiperSlide>{staticSliderItem()}</SwiperSlide>

          <SwiperSlide>{staticSliderItem()}</SwiperSlide>

          <SwiperSlide>{staticSliderItem()}</SwiperSlide>

          <SwiperSlide>{staticSliderItem()}</SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
};

export default Slider;
