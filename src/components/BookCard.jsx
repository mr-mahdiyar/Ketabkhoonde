import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

const BookCard = ({ book, authors }) => {
  return (
    <>
      <Card sx={{ maxWidth: "90%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={book?.photo}
            alt={book?.name}
            sx={{
              objectFit: "contain",
              aspectRatio: "0.7",
              maxWidth: "80%",
              marginX: "auto",
              marginTop: "0.5rem",
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              fontFamily={"diplomat"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              fontSize={"22px"}
              maxWidth={"90%"}
            >
              {book?.name}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontFamily={"diplomat"}
            >
              اثری از:
              <Box component={"span"} marginRight={0.5}>
                {authors.find((author) => author.id === book.authorId)?.name}
              </Box>
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontFamily={"diplomat"}
            >
              انتشارات:
              <Box component={"span"} marginRight={0.5}>
                {book?.publisher}
              </Box>
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontFamily={"diplomat"}
            >
              تعداد صفحات:
              <Box component={"span"} marginRight={0.5}>
                {book?.pageNumbers}
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default BookCard;
