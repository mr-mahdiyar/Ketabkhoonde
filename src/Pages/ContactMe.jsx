import React from "react";
import { Box, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
const ContactMe = () => {
  return (
    <Box component={"div"} width={"100"} bgcolor={"customGray.main"} mt={0.5}>
        <title>تماس با ما</title>
      <Box component={"div"} maxWidth={"80%"} p={4} mx={"auto"}>
        <Typography fontFamily={"Diplomat"} variant="h5">
          جهت ارتباط با بنده می توانید از طرق زیر اقدام فرمایید: <br />
        </Typography>
        <Typography fontFamily={"Diplomat"} variant="h5" textAlign={"left"}>
          onemahdiyar@gmail.com <AlternateEmailIcon /> <br />
        </Typography>
        <Typography fontFamily={"Diplomat"} variant="h5" textAlign={"left"}>
          09203400310 <PhoneInTalkIcon /> <br />
        </Typography>
        <Typography fontFamily={"Diplomat"} variant="h5">
          در گیت هاب و اینستاگرام من را دنبال کنید: <br />
        </Typography>
        <Typography fontFamily={"Diplomat"} variant="h5" textAlign={"left"}>
          github.com/mr-mahdiyar <GitHubIcon /> <br/>
        </Typography>
        <Typography fontFamily={"Diplomat"} variant="h5" textAlign={"left"}>
          instagram.com/_mr__mahdiar <InstagramIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactMe;
