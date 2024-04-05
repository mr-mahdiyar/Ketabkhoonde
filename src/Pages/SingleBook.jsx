import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookByIdFromServer, selectBookById } from "../app/booksSlice";
import { Box, Typography } from "@mui/material";
import { selectAllAuthors, getAuthorByIdFromServer, selectAuthorByID } from "../app/authorsSlice";

const SingleBook = () => {
  const { bookId } = useParams();
  const authors = useSelector(selectAllAuthors);
  const dispatch = useDispatch();
  const [showAudioIntroduction, setShowAudioIntroduction] = useState(false);
  useEffect(() => {
    setShowAudioIntroduction(false);
    dispatch(getBookByIdFromServer(bookId))
      .then(() => setShowAudioIntroduction(true))
      .catch(() => setShowAudioIntroduction(false));
  }, [bookId]);

  const book = useSelector(selectBookById);
  return (
    <Box
      component={"div"}
      bgcolor={"customGray.main"}
      width={"100%"}
      mt={0.5}
      padding={2}
    >
      <title>کتابها - {book?.name}</title>
      <Box
        component={"div"}
        maxWidth={{ xs: "90%", sm: "90%", md: "80%" }}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        mx={"auto"}
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Box
          component={"div"}
          className="image-wrapper"
          width={{ xs: "90%", sm: "50%", md: "50%", lg: "25%" }}
          mx={{ xs: "auto", sm: 0 }}
        >
          <img
            src={`${book?.photo}`}
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
              مشخصات کتاب
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
              width={{ xs: "100%", lg: "40%" }}
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
                  نام کتاب:
                </Typography>
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  &nbsp;{book?.name}
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
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  نویسنده کتاب:
                </Typography>
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  &nbsp;
                  {
                    authors?.find((author) => author.id === book?.authorId)
                      ?.name
                  }
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
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  انتشارات:
                </Typography>
                <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                  &nbsp;{book?.publisher}
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
                {book?.translator ? (
                  <>
                    <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                      مترجم:
                    </Typography>
                    <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                      &nbsp;{book?.translator}
                    </Typography>
                  </>
                ) : (
                  <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
                    این کتاب به زبان فارسی نوشته شده است.
                  </Typography>
                )}
              </Box>
              <Box>
                <Typography
                  marginTop={{ xs: 2, lg: 0 }}
                  fontFamily={"Diplomat"}
                  fontSize={"22px"}
                >
                  تعداد صفحات:&nbsp;{book?.pageNumbers}
                </Typography>
              </Box>
            </Box>
            <Box
              component={"div"}
              width={{ xs: "100%", lg: "70%" }}
              marginY={"auto"}
              marginTop={{ xs: 2, lg: 0 }}
            >
              <Typography
                textAlign={"justify"}
                fontFamily={"Diplomat"}
                fontSize={"22px"}
              >
                {book?.textIntroduction}
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
          نقد کتاب
        </Typography>
        <Typography fontFamily={"Diplomat"} fontSize={"22px"}>
          {book?.bookReview}
        </Typography>
        <Box
          className="audio-introduction-wrapper"
          component={"div"}
          width={"100%"}
          marginTop={8}
        >
          <Typography
            mb={3}
            width={"100%"}
            pr={3}
            borderBottom={"2px solid black"}
            pb={2}
            fontFamily={"Ordibehesht"}
            fontSize={"22px"}
          >
            تیکه های شنیدنی کتاب
          </Typography>
          <Box
            className="audio-wrapper"
            width={{ xs: "90%", md: "70%" }}
            mx={"auto"}
          >
            {showAudioIntroduction ? (
              <audio controls preload="metadata" style={{ width: "100%" }}>
                <source src={book?.audioIntroduction} type="audio/mpeg" />
              </audio>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleBook;
