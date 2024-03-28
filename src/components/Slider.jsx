import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

const Slider = ({ sliderBooks, authors }) => {
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
          modules={[Autoplay]}
          // autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          // slidesPerView={3.5}
          slidesPerView={3}
          spaceBetween={10}
          initialSlide={2}
          centeredSlides
          centeredSlidesBounds
          freeMode
          loop
          breakpoints={{
            300: {
              slidesPerView: 1.4,
            },
            900: {
              slidesPerView: 1.75,
            },
            1300: {
              slidesPerView: 3.01,
            },
          }}
        >
          {sliderBooks.map((book) => (
            <SwiperSlide key={book?.id}>
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
                  <Link to={`books/${book?.id}`} className="w-full">
                    <img
                      src={book?.photo}
                      className="w-3/5 m-auto sm:w-full aspect-[0.7] rounded-md"
                    />
                  </Link>
                </Box>
                <Box className="text-wrapper" minWidth="50%" marginLeft="1rem">
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={book?.name}
                        sx={{marginX: "auto"}}
                        primaryTypographyProps={{
                          textAlign: "center",
                          fontSize: { xs: "16px", sm: "18px" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="نویسنده: " />
                      <ListItemText
                        primary={authors.find((author) => author.id === book.authorId)?.name}
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
