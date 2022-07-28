import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Footer from "./Component/Footer/Footer";
import useMediaQuery from '@mui/material/useMediaQuery';

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
     <Box bgcolor="background">
        <CssBaseline />
        <Footer />
         </Box>
    </ThemeProvider>
  );
}

export default App;
