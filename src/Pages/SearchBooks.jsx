import React, { useEffect, useState, useRef } from "react";
import { BookCard } from "../";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../app/booksSLice";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { selectAllAuthors } from "../app/authorsSlice";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";

const SearchBooks = () => {
  const { searchTerm } = useParams();

  const books = useSelector(selectAllBooks).filter((book) =>
    book.name.includes(searchTerm)
  );
  const authors = useSelector(selectAllAuthors);

  const gridRef = useRef();

  const itemsPerPage = 6;
  const pageNumbers = Math.ceil(books?.length / itemsPerPage);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  let startIndexOfItems = currentPageNumber * itemsPerPage;
  let endIndexOfItems = currentPageNumber * itemsPerPage + itemsPerPage;

  const changePageHandler = (_, value) => {
    setCurrentPageNumber(value - 1);
  };
  useEffect(() => {
    startIndexOfItems = currentPageNumber * itemsPerPage;
    endIndexOfItems = currentPageNumber * itemsPerPage + itemsPerPage;
    gridRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentPageNumber]);
  useEffect(() => {
    gridRef.current.scrollIntoView({ behavior: "smooth" });
  }, [searchTerm])
  return (
    <>
      {books.length > 0 ? (
        <Box
          marginTop={0.5}
          bgcolor={"customGray.main"}
          paddingY={3}
          ref={gridRef}
        >
          <Grid
            container
            columns={15}
            rowSpacing={7}
            justifyContent={"space-evenly"}
          >
            {books?.slice(startIndexOfItems, endIndexOfItems).map((book) => (
              <Grid xs={10} sm={6} md={4} key={book?.id}>
                <Link to={`/books/${book?.id}`}>
                  <BookCard book={book} authors={authors} />
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box
            component={"div"}
            width={"100%"}
            marginTop={5}
            textAlign={"center"}
            dir="ltr"
          >
            {books.length > 6 ? (
              <Pagination
                count={pageNumbers}
                color="primary"
                sx={{ display: "inline-block" }}
                page={currentPageNumber + 1}
                onChange={changePageHandler}
              />
            ) : null}
          </Box>
        </Box>
      ) : (
        <Box
          height={"100vh"}

          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          ref={gridRef}
          marginTop={0.5}
          bgcolor={"customGray.main"}
        >
          <Typography fontFamily={"Ordibehesht"} variant="h3" textAlign={"center"}>متأسفانه کتاب مورد نظر یافت نشد!</Typography>
        </Box>
      )}
    </>
  );
};

export default SearchBooks;
