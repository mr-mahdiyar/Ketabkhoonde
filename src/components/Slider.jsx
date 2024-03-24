import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Image from "../assets/BooksImages/01.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
// const staticSliderItem = () => {
//   return (

//   );
// };
const Slider = ({ sliderBooks }) => {
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
              slidesPerView: 1.4,
            },
            900: {
              slidesPerView: 1.75,
            },
            1300: {
              slidesPerView: 3.5,
            },
          }}
        >
          {sliderBooks.map((book) => (
            <SwiperSlide>
              <Box
                className="image-text-container"
                component="div"
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                border="1px solid white"
                padding={2}
                borderRadius={3}
              >
                <Box
                  className="image-container"
                  maxWidth={{ xs: "75%", sm: "40%" }}
                >
                  <Link to={`books/${book?.bookId}`} className="w-full">
                    <img
                      src={book?.photo}
                      className="w-3/5 m-auto sm:w-full aspect-[0.7] rounded-md"
                    />
                  </Link>
                </Box>
                <Box className="text-wrapper" minWidth="50%" marginLeft="1rem">
                  <List>
                    <ListItem>
                      <ListItemText primary="نام کتاب: " />
                      <ListItemText
                        primary={
                          book?.name.length > 10
                            ? `${book?.name.slice(0, 10)}...`
                            : book?.name
                        }
                        primaryTypographyProps={{
                          textAlign: "start",
                          marginRight: "0.4rem",
                          fontSize: { xs: "16px", sm: "18px" },
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="نویسنده: " />
                      <ListItemText
                        primary="بوستین گردر"
                        primaryTypographyProps={{
                          textAlign: "start",
                          marginRight: "0.4rem",
                          fontSize: { xs: "16px", sm: "18px" },
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="انتشارات: " />
                      <ListItemText
                        primary={book?.publisher}
                        primaryTypographyProps={{
                          textAlign: "start",
                          marginRight: "0.4rem",
                          fontSize: { xs: "16px", sm: "18px" },
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="تعداد صفحات: "
                        sx={{ marginLeft: "0.1rem" }}
                      />
                      <ListItemText
                        primary={book?.pageNumbers}
                        primaryTypographyProps={{
                          textAlign: "start",
                          marginRight: "0.4rem",
                          fontSize: { xs: "16px", sm: "18px" },
                        }}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default Slider;
