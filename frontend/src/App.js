import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from "react-router-dom";

import Home from "./components/Home.js";
import NotFound from "./components/NotFound.js";
import Calculator from "./components/Calculator.js";
import AppBar from "./components/SiteAppBar";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    button: {
      textTransform: "none",
    },
  },

  palette: {
    primary: {
      light: "#fffff", // White
      main: "#06075c", // White
      dark: "#BFBFBF", // Dark Gray
      contrastText: "#00000", // Black
    },
    secondary: {
      light: "#d5f0f7", // Light Blue
      main: "#06075c", // Navy
      dark: "#5d94c4", // Middle Blue
      contrastText: "#ffffff",
    },
    mode: "light",
  },
});

export default function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
      <BrowserRouter>
        <AppBar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
