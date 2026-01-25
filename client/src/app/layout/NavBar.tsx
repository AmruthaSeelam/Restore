import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setDarkMode } from "../../store/uiSlice";

export default function NavBar() {
  const centerItems = [
    {
      title: "Catalog",
      path: "/catalog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  const rightItems = [
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Register",
      path: "/register",
    },
  ];
  const navStyles = {
    color: "inherit",
    typography: "h6",
    textDecoration: "none",
    "&:hover": {
      color: "grey.500",
    },
    "&.active": {
      color: "#baecf9",
    },
  };
  const { isLoading, darkMode } = useAppSelector(state => state.ui)
  const dispatch=useAppDispatch()
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" component={NavLink} to="/" sx={navStyles}>
            RE-STORE
          </Typography>
          <Button onClick={() => dispatch(setDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </Button>
        </Box>
        <List sx={{ display: "flex" }}>
          {centerItems.map((item) => {
            return (
              <ListItem
                component={NavLink}
                to={item.path}
                key={item.title}
                sx={navStyles}
              >
                {item.title.toUpperCase()}
              </ListItem>
            );
          })}
        </List>
        <Box display="flex" alignItems="center">
          <IconButton size="large" color="inherit">
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightItems.map((item) => {
              return (
                <ListItem
                  component={NavLink}
                  to={item.path}
                  key={item.title}
                  sx={navStyles}
                >
                  {item.title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}
