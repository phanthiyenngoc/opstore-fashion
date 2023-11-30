const light = {
  palette: {
    primary: {
      main: "#000",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#47008F",
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
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
      lineHeight: "1.5em", //24px
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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#000",
          color: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
          "&:disabled": {
            backgroundColor: "#ccc",
          },
        },
      },
      secondary: {
        backgroundColor: "#47008F",
        color: "white",
        "&:hover": {
          backgroundColor: "#47008F",
        },
        "&:disabled": {
          backgroundColor: "#ccc",
        },
      },
    },
  },
};

export default light;
