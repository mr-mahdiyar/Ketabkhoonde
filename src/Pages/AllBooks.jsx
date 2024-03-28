import React, { useEffect, useState, useRef } from "react";
import { BookCard } from "../";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../app/booksSLice";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { selectAllAuthors } from "../app/authorsSlice";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
const AllBooks = () => {

  const books = useSelector(selectAllBooks);
  const authors = useSelector(selectAllAuthors);

  const gridRef = useRef()

  const itemsPerPage = 6;
  const pageNumbers = Math.ceil(books?.length / itemsPerPage);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  let startIndexOfItems = currentPageNumber * itemsPerPage
  let endIndexOfItems = currentPageNumber * itemsPerPage + itemsPerPage

  const changePageHandler = (_, value) => {
    setCurrentPageNumber(value - 1)
  }
  useEffect(() => {
    startIndexOfItems = currentPageNumber * itemsPerPage
    endIndexOfItems = currentPageNumber * itemsPerPage + itemsPerPage
    gridRef.current.scrollIntoView({behavior: "smooth"});
  }, [currentPageNumber]);
  return (
    <Box marginTop={0.5} bgcolor={"customGray.main"} paddingY={3} ref={gridRef}>
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
        <Pagination
          count={pageNumbers}
          color="primary"
          sx={{ display: "inline-block" }}
          page={currentPageNumber + 1}
          onChange={changePageHandler}
        />
      </Box>
    </Box>
  );
};

export default AllBooks;
