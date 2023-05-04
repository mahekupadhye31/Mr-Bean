import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: { main: "#AB877D" },
    error: { main: "#AB877D" },
  },
  background: "#AB877D",
  text: { primary: "#AB877D" },
  gradient: "linear-gradient(138.72deg, #09C1D7 -0.66%, #77CE90 86.47%)",
  heading2: "#333333",
  heading1: "#000000",

  typography: {
    h2: {
      fontWeight: "700",
      fontSize: "39px",
    },
    h3: {
      fontWeight: "700",
      fontSize: "30px!important",
      "@media (max-width:600px)": {
        fontSize: "25px!important",
      },
    },
    h6: {
      fontWeight: "500",
      fontSize: "10px",
    },
    textField: {
      height: "50px!important",
    },
  },
  MuiCard: {
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
  components: {
    // Name of the component

    // MuiBox: {
    //   styleOverrides: {
    //     root: {
    //       "@media (max-width:400px)": {
    //         padding: "0!important",
    //       },
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "white",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            fontSize: "13px",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "40px",
          backgroundColor: "none!important",
        },
       
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
          borderRadius: "10px!important",
        },
        // The props to change the default for.
        // No more ripple, on the whole application 💣!
      },
    },
  },
});

// [theme.breakpoints.down("xs")]: {
//   overrides: {
//     MuiTypography: {
//       root: {
//         fontSize: "12px!important",
//       },
//     },
//   },
// },
