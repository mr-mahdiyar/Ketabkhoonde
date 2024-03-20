import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Box component={"footer"} maxWidth={"80%"} marginY={0.5} marginX={"auto"}>
        <Box
          component={"div"}
          display={"flex"}
          justifyContent={"space-between"}
          className="list-wrapper"
          flexDirection={{xs: "column", md: "row"}}
          alignItems={"center"}
        >
          <List>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="پیونده های مفید"
                primaryTypographyProps={{
                  fontFamily: "Ordibehesht",
                  fontSize: "22px",
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="کتاب ها"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/contact"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="تماس با ما"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/contact"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="درباره با ما"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="کتاب های پیشنهادی"
                primaryTypographyProps={{
                  fontFamily: "Ordibehesht",
                  fontSize: "22px",
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="پنج زبان عشق"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="کیمیاگر"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="نامیرا"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="دسته بندی های پیشنهادی"
                primaryTypographyProps={{
                  fontFamily: "Ordibehesht",
                  fontSize: "22px",
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="رمان"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="تاریخ"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/books/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="توسعه فردی"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="دسته بندی های پیشنهادی"
                primaryTypographyProps={{
                  fontFamily: "Ordibehesht",
                  fontSize: "22px",
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/authors/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="عباس معروفی"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/authors/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="جرج اورول"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <Link
                to="/authors/"
                className="text-black duration-200 hover:text-customOrange"
              >
                <ListItemText
                  primary="فئودور داستایفسکی"
                  primaryTypographyProps={{
                    fontFamily: "Dirooz",
                    fontSize: "16px",
                  }}
                />
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box
          component={"div"}
          className="social-media"
          marginTop={5}
          textAlign={"center"}
        >
          <Typography
            fontFamily={"Ordibehesht"}
            fontSize={"22px"}
            marginBottom={1}
          >
            ما را در شبکه های اجتماعی دنبال کنید.
          </Typography>
          <Box component={"span"}>
            <Link to="https://github.com/mr-mahdiyar">
              <GitHubIcon />
            </Link>
          </Box>
          <Box component={"span"} marginRight={1}>
            <Link to="https://t.me/ketabkhoondeh">
              <TelegramIcon />
            </Link>
          </Box>
          <Box component={"span"} marginRight={1}>
            <Link to="https://instagram.com/_mr__mahdiyar">
              <InstagramIcon />
            </Link>
          </Box>
        </Box>
        <Box component={"div"} marginTop={5} textAlign={"center"}>
          <Typography fontFamily={"Ordibehesht"} fontSize={"22px"}>
            تمامی حقوق این سامانه محفوظ است و کپی تنها با ذکر منبع مجاز است.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
