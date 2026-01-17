import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Catalog from "../../features/catalog/Catalog.tsx";
import NavBar from "./NavBar.tsx";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
   const [isDarkMode,setIsDarkMode]=useState(true);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: !isDarkMode ? "#eaeaea" : "#121212",
      },
    },
  });

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
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
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
