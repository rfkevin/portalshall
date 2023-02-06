import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Home from "./Pages/Home/home";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Donation from "./Pages/Donation/Donate";
import Products from './Pages/Products/product';
import Thanks from './Pages/Thanks/thanks';

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  theme.typography.h4 = {
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/thanks" element={<Thanks/>} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
