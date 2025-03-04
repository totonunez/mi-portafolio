"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu, Home, Work, ContactMail } from "@mui/icons-material";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Inicio", icon: <Home />, link: "/" },
    { text: "Proyectos", icon: <Work />, link: "/proyectos" },
    { text: "Contacto", icon: <ContactMail />, link: "/contacto" },

  ];

  return (
    <>
      {/* Navbar Superior */}
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Portafolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menú Lateral */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
