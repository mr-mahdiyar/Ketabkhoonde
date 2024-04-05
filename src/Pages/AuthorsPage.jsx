import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { getAuthorByIdFromServer, selectAuthorByID } from "../app/authorsSlice";
const AuthorsPage = () => {
  const { authorId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthorByIdFromServer(authorId));
    authorsInformationSectionRef.current.scrollIntoView({behavior: "smooth"});
  }, [authorId]);
  const author = useSelector(selectAuthorByID)
  const authorsInformationSectionRef = useRef()
  return (
    <Box
      component={"div"}
      bgcolor={"customGray.main"}
      width={"100%"}
      mt={0.5}
      padding={2}
    >
      <title>نویسنده ها - {author?.name}</title>
      <Box
        component={"div"}
        maxWidth={{ xs: "90%", sm: "90%", md: "80%" }}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        mx={"auto"}
        flexDirection={{ xs: "column", lg: "row" }}
        ref={authorsInformationSectionRef}
      >
        <Box
          component={"div"}
          className="image-wrapper"
          width={{ xs: "90%", sm: "50%", md: "50%", lg: "25%" }}
          mx={{ xs: "auto", sm: 0 }}
        >
          <img
            src={`${author?.photo}`}
            alt="book image"
            className="w-full aspect-[0.7] object-contain"
          />
        </Box>
        <Box
          className="texts-wrapper"
          component={"div"}
          display={"flex"}
          width={{ xs: "95%", sm: "95%", md: "100%", lg: "70%" }}
          flexDirection={"column"}
        >
          <Box
            component={"div"}
            display={"flex"}
            width={"100%"}
            flexDirection={"column"}
            position={"relative"}
          >
            <Typography
              sx={{
                "&:after": {
                  content: '""',
                  width: { xs: "27%", sm: "35%", md: "39%" },
                  height: "4px",
                  position: "absolute",
                  left: 0,
                  borderTop: "2px solid black",
                  top: "1.2rem",
                  marginRight: "0.5rem",
                },
                "&:before": {
                  content: '""',
                  width: { xs: "24%", sm: "32%", md: "38%" },
                  height: "4px",
                  position: "absolute",
                  right: 0,
                  display: "block",
                  borderTop: "2px solid black",
                  top: "1.2rem",
                  marginRight: "0.5rem",
                },
              }}
              marginX={"auto"}
              fontFamily={"Ordibehesht"}
              fontSize={"22px"}
            >
              مشخصات نویسنده
            </Typography>
          </Box>
          <Box
            className="book_details_wrapper"
            component={"div"}
            display={"flex"}
            width={{ xs: "90%", sm: "85%" }}
            height={"100%"}
            mx={"auto"}
            flexDirection={{ xs: "column", lg: "row" }}
            marginTop={"2%"}
            gap={3}
          >
            <Box
              component={"div"}
              width={{ xs: "100%", lg: "50%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              height={"auto"}
            >
              <Box
                component={"div"}
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                width={"100%"}
                textAlign={{ xs: "center", sm: "right" }}
                marginTop={{ xs: 2, lg: 0 }}
              >
                <Typography
                  fontFamily={"Diplomat"}
                  fontSize={"22px"}
                  textOverflow={"hidden"}
                  whiteSpace={"nowrap"}
                >
                   نام نویسنده:
                </Typography>
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  &nbsp;{author?.name}
                </Typography>
              </Box>
              <Box
                component={"div"}
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                width={"100%"}
                textAlign={{ xs: "center", sm: "right" }}
                marginTop={{ xs: 2, lg: 0 }}
              >
                <Typography
                  fontFamily={"Diplomat"}
                  fontSize={"22px"}
                  textOverflow={"hidden"}
                  whiteSpace={"nowrap"}
                >
                ملیت:
                </Typography>
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  &nbsp;{author?.originallity}
                </Typography>
              </Box>
              <Box
                component={"div"}
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                width={"100%"}
                textAlign={{ xs: "center", sm: "right" }}
                marginTop={{ xs: 2, lg: 0 }}
              >
                <Typography
                  fontFamily={"Diplomat"}
                  fontSize={"22px"}
                  textOverflow={"hidden"}
                  whiteSpace={"nowrap"}
                >
                   تاریخ تولد :
                </Typography>
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  &nbsp;{author?.birthDate}
                </Typography>
              </Box>
              <Box
                component={"div"}
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                width={"100%"}
                textAlign={{ xs: "center", sm: "right" }}
                marginTop={{ xs: 2, lg: 0 }}
              >
                <Typography
                  fontFamily={"Diplomat"}
                  fontSize={"22px"}
                >
                   پیشه نویسنده :
                   &nbsp;{author?.job}
                </Typography>
              </Box>
              <Box
                component={"div"}
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                width={"100%"}
                textAlign={{ xs: "center", sm: "right" }}
                marginTop={{ xs: 2, lg: 0 }}
              >
                <Typography
                  fontFamily={"Diplomat"}
                  fontSize={"22px"}
                >
                   بهترین کتابها :
                   &nbsp;{author?.bestBooks}
                </Typography>
              </Box>
            </Box>
            <Box
              component={"div"}
              width={{ xs: "100%", lg: "50%" }}
              marginY={"auto"}
              marginTop={{ xs: 2, lg: 0 }}
            >
              <Typography
                textAlign={"justify"}
                fontFamily={"Diplomat"}
                fontSize={"22px"}
              >
                {author?.awards}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component={"div"} maxWidth={"80%"} marginTop={8} mx={"auto"}>
        <Typography
          mb={3}
          width={"100%"}
          pr={3}
          borderBottom={"2px solid black"}
          pb={2}
          fontFamily={"Ordibehesht"}
          fontSize={"22px"}
        >
         زندگینامه
        </Typography>
        <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
          {author?.byography}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthorsPage;
