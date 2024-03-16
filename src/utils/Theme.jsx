import { createTheme } from "@mui/material";
const myTheme = createTheme({
  typography: {
    fontFamily: ["Dirooz", "Diplomat"].join(',')
  },
  palette: {
    customBlue: {
      main: "#00c0e2",
    },
    customGreen: {
      main: "#50DBB4",
    },
    customGray: {
      main: "#dcdde1",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
    customeOrange: {
      main: "#fe4902",
    },
  },
});

export default myTheme;
