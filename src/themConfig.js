import { createTheme } from "@mui/material/styles";
export const light = {
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    subtitle1: {
      color: "#626262",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    subtitle2: {
      color: "#626262",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    caption: {
      color: "#626262",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    body1: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    body2: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    h4: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    h5: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    h6: {
      color: "#222222",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
  },
};

export const theme = createTheme(light);
