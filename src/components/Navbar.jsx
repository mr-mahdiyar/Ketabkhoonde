import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/NavbarAssets/Background.jpg";
import { setSearchTerm, selectSearchTerm } from "../app/booksSLice";
import { useDispatch, useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0.5rem",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("xs")]: {
    width: "15rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "12rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "20rem",
  },
  "&:focus-within": {
    [theme.breakpoints.up("xs")]: {
      width: "18rem",
      border: `1px solid ${theme.palette.customeOrange.main}`,
    },
    [theme.breakpoints.up("sm")]: {
      width: "15rem",
      border: `1px solid ${theme.palette.customeOrange.main}`,
    },
    [theme.breakpoints.up("md")]: {
      width: "24rem",
      border: `1px solid ${theme.palette.customeOrange.main}`,
    },
  },
  marginLeft: 0,
  border: "1px solid black",
  transition: "width 0.2s",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  left: "-0.5rem",
  cursor: "pointer",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 1, 0.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },
}));
const NavbarLinksTextsStyle = {
  fontFamily: "Dirooz",
  fontSize: { xs: "12px", md: "16px" },
};
const NavbarLinksIconsStyle = {
  fontSize: { xs: "16px" },
  marginLeft: { sm: "4px", md: "4px" },
  marginRight: { xs: "0", md: "12px" },
};
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchInputChangeHandler = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };
  const searchTerm = useSelector(selectSearchTerm);
  const clickSearchIconHandler = () => {
    if (searchTerm.length) {
      navigate(`/books/search/${searchTerm}`);
      dispatch(setSearchTerm(""));
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="white" sx={{ boxShadow: "none" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { md: "90%" },
              margin: { md: "0 auto" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                padding: "0",
                marginRight: { xs: "-0.5rem" },
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              justifyContent="space-evenly"
              gap={1}
              alignItems="center"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link
                to="/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <HomeRoundedIcon sx={NavbarLinksIconsStyle} />
              </Link>
              <Link
                to="/books"
                className="text-black duration-200 hover:text-customOrange"
              >
                <AutoStoriesOutlinedIcon sx={NavbarLinksIconsStyle} />
                <Typography variant="h7" sx={NavbarLinksTextsStyle}>
                  کتاب ها
                </Typography>
              </Link>
              <Link
                to="/store"
                className="text-black duration-200 hover:text-customOrange"
              >
                <LocalGroceryStoreOutlinedIcon sx={NavbarLinksIconsStyle} />
                <Typography variant="h7" sx={NavbarLinksTextsStyle}>
                  فروشگاه
                </Typography>
              </Link>
              <Link
                to="/about"
                className="text-black duration-200 hover:text-customOrange"
              >
                <PeopleAltOutlinedIcon sx={NavbarLinksIconsStyle} />
                <Typography variant="h7" sx={NavbarLinksTextsStyle}>
                  درباره ما
                </Typography>
              </Link>
              <Link
                to="/contact"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ContactPhoneOutlinedIcon sx={NavbarLinksIconsStyle} />
                <Typography variant="h7" sx={NavbarLinksTextsStyle}>
                  تماس با ما
                </Typography>
              </Link>
            </Box>
            <Search>
              <SearchIconWrapper onClick={clickSearchIconHandler}>
                <SearchIcon sx={{ zIndex: "1" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="جست و جو"
                inputProps={{ "aria-label": "search" }}
                sx={{ fontFamily: "Dirooz" }}
                onChange={(event) => searchInputChangeHandler(event)}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Box component="div" width="100%">
          <img src={BackgroundImage} className="w-full" />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
