import React, { useState } from "react";
import { useEffect } from "react";
import {
  getAllBooksFromServer,
  getBooks,
  getBookById,
  addBookToServer,
} from "../app/booksSLice";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
const AddbookForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pageNumbers, setPageNumbers] = useState("");
  const [photo, setPhoto] = useState("");
  const [audioIntroduction, setAudioIntroduction] = useState("");
  const [translator, setTranslator] = useState("");
  const [textIntroduction, setTextIntroduction] = useState("");
  const [bookReview, setBookReview] = useState("");
  useEffect(() => {
    dispatch(getAllBooksFromServer());
  }, []);
  const books = useSelector(getBooks);
  const submitHandler = () => {
    const book = {
      bookId: nanoid(),
      name,
      authorId,
      publisher,
      pageNumbers,
      photo,
      audioIntroduction,
      translator,
      textIntroduction,
      bookReview,
    };

    dispatch(addBookToServer(book))

    setName("")
    setAuthorId("")
    setPublisher("")
    setPageNumbers("")
    setPhoto("")
    setTranslator("")
    setTextIntroduction("")
    setBookReview("")
    setAudioIntroduction("")
  };
  return (
    <Box
      component={"div"}
      width={"80%"}
      marginY={4}
      marginX={"auto"}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      dir="rtl"
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <TextField
          placeholder="نام کتاب"
          sx={{ width: "45%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder="نویسنده کتاب"
          sx={{ width: "45%" }}
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <TextField
          placeholder="مترجم"
          sx={{ width: "45%" }}
          value={translator}
          onChange={(e) => setTranslator(e.target.value)}
        />
        <TextField
          placeholder="انتشارات"
          sx={{ width: "45%" }}
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <TextField
          placeholder="تعداد صفحات"
          sx={{ width: "45%" }}
          value={pageNumbers}
          onChange={(e) => setPageNumbers(e.target.value)}
        />
        <TextField
          placeholder="عکس"
          sx={{ width: "45%" }}
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </Box>

      <TextField
        placeholder="لینک معرفی صوتی"
        value={audioIntroduction}
        onChange={(e) => setAudioIntroduction(e.target.value)}
      />
      <TextField
        multiline
        placeholder="معرفی اجمالی"
        minRows={5}
        value={textIntroduction}
        onChange={(e) => setTextIntroduction(e.target.value)}
      />
      <TextField
        multiline
        placeholder="نقد"
        minRows={15}
        value={bookReview}
        onChange={(e) => setBookReview(e.target.value)}
      />
      <Button variant="outlined" onClick={submitHandler}>
        ثبت کتاب
      </Button>
    </Box>
  );
};

export default AddbookForm;
