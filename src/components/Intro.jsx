import { Box, Typography } from "@mui/material";
import React from "react";
import IntroImage from "../assets/IntroAssets/Books.png";

// set spacing for margin tob container box
// const theme = {
// //   spacing: [0.5, 2, 3, 4],
// };

const Intro = () => {
  return (
    <Box bgcolor="customGreen.main" sx={{ mt: 0.5 }}>
      <Box
        className="image-container"
        component="div"
        display="flex"
        flexDirection={{xs: "column", sm: "row"}}
        justifyContent="space-between"
        alignItems="center"
        width="80%"
        margin="0 auto"
      >
        <Box
          className="texts-container"
          component="div"
          width={{xs: "80%" ,sm: "35%"}}
          textAlign="center"
        >
          <Typography variant="h4" fontFamily="Ordibehesht" marginY={1}>
            اینجا کتابخوندس
          </Typography>
          <Typography fontFamily="Diplomat" fontSize={{lg: "28px", md: "22px"}} textAlign="justify">
            به صـــدای کتابا گوش کن! کتابا صدات می زنن! ایـــنجا می تونی کلی
            دوســـت و هـــمدم جدید پـــیدا کنـــی و یه دنـــیا چـــیزای جـــدید
            و جالب لا به لای سطراشون یادبگیری! پس با کتابخونده همراه شو...
          </Typography>
        </Box>
        <Box component="div" sx={{ my: 2, width: {xs: "80%" ,sm: "40%"} }}>
          <img src={IntroImage} className="w-100 object-cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
