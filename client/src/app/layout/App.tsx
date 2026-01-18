import { useState } from "react";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar.tsx";
import { Outlet } from "react-router";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: !isDarkMode ? "#eaeaea" : "#121212",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Box
        sx={{
          minHeight: "120vh",
          background: isDarkMode
            ? "radial-gradient(circle, #1e3aBa, #111B27)"
            : "radial-gradient(circle, #baecf9, #f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
