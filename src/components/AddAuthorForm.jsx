import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addAuthorToServer } from "../app/authorsSlice";
import { nanoid } from "@reduxjs/toolkit";
const AddAuthorForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [originallity, setOriginallity] = useState("");
  const [job, setJob] = useState("");
  const [bestBooks, setBestBooks] = useState("");
  const [awards, setAwards] = useState("");
  const [photo, setPhoto] = useState("");
  const [byography, setByography] = useState("");
  const submitHandler = () => {
    const author = {
      id: nanoid(),
      name,
      birthDate,
      originallity,
      job,
      bestBooks,
      awards,
      byography,
      photo
    };
    dispatch(addAuthorToServer(author));
    setName("");
    setBirthDate("");
    setOriginallity("");
    setJob("");
    setBestBooks("");
    setAwards("");
    setPhoto("");
    setByography("");
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
          placeholder="نام نویسنده"
          sx={{ width: "45%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder="اصالت نویسنده"
          sx={{ width: "45%" }}
          value={originallity}
          onChange={(e) => setOriginallity(e.target.value)}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <TextField
          placeholder="پیشه نویسنده"
          sx={{ width: "45%" }}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <TextField
          placeholder="تاریخ تولد"
          sx={{ width: "45%" }}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </Box>
      <TextField
        placeholder="بهترین کتاب ها"
        sx={{ width: "45%" }}
        value={bestBooks}
        onChange={(e) => setBestBooks(e.target.value)}
        style={{ width: "100%" }}
      />
      <TextField
        placeholder="عکس"
        sx={{ width: "45%" }}
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        style={{ width: "100%", direction: "ltr" }}
      />
      <TextField
        placeholder="جوایز و افتخارات"
        sx={{ width: "45%" }}
        value={awards}
        onChange={(e) => setAwards(e.target.value)}
        multiline
        minRows={3}
        style={{ width: "100%" }}
      />
      <TextField
        placeholder="زندگینامه"
        sx={{ width: "45%" }}
        value={byography}
        onChange={(e) => setByography(e.target.value)}
        multiline
        minRows={5}
        style={{ width: "100%" }}
      />
      <Button variant="outlined" onClick={submitHandler}>
        ثبت نویسنده
      </Button>
    </Box>
  );
};

export default AddAuthorForm;
