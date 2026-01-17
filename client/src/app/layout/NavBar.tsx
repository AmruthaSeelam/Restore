import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import {DarkMode,LightMode} from "@mui/icons-material";
import type { NavBarProps } from "../models/Product";

export default function NavBar({setIsDarkMode,isDarkMode}:NavBarProps) {
   
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5">RE-STORE</Typography>
        <Button onClick={()=>setIsDarkMode(!isDarkMode)}>
        {isDarkMode?<DarkMode/>:<LightMode sx={{color:"yellow"}}/>}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
