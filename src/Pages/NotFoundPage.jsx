import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../assets/NotFoundPage/404.jpg";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    
      <Box
        component={"div"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        height={"100vh"}
        position={"relative"}
      >
        <title>صفحه مورد نظر یافت نشد!</title>
        <Box component={"div"} mx={"auto"} width={"80vw"}>
          <img
            src={Image}
            alt="not found picture"
            className="w-full aspect-video"
          />
        </Box>
        <Box
          component={"div"}
          position={"absolute"}
          bottom={90}
          left={"50%"}
          sx={{ transform: "translate(-50%, 0)" }}
          p={2}
          borderRadius={10}
          bgcolor={"rgb(255,255,255, 0.8)"}
        >
          <Link to={"/"}>
            <Typography fontFamily={"Ordibehesht"} variant="h4">
              عی بابا! انگاری گم شدی! اینجا رو کلیک کن برگردیم صفحه اصلی...
            </Typography>
          </Link>
        </Box>
      </Box>
  );
};

export default NotFoundPage;
