"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/documents", label: "Documents" },
  { href: "/tasks", label: "Tasks" },
  { href: "/clients", label: "Clients" },
  { href: "/reports", label: "Reports" },
  { href: "/integrations", label: "Integrations" },
];

export function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsMenuOpen(open);
    };

  const drawerContent = (
    <Box
      role="presentation"
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ p: 1 }}>
        {navLinks.map((link) => (
          <ListItem disablePadding key={link.href}>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{ marginTop: "auto", p: 2, display: "flex", alignItems: "center" }}
      >
        <Avatar
          alt="User Avatar"
          src="/images/top-nav/user-avatar.svg"
          sx={{ width: 40, height: 40 }}
        />
        <Typography sx={{ ml: 2, fontWeight: "medium" }}>William</Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        position="static"
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link href="/" passHref>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  alt="Fintegra Logo"
                  height={24}
                  src="/images/top-nav/brand-logo.svg"
                  width={24}
                />
                <Typography
                  component="div"
                  sx={{
                    ml: 1,
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",
                  }}
                  variant="h6"
                >
                  Fintegra
                </Typography>
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map((link) => (
                <Button
                  component={Link}
                  href={link.href}
                  key={link.href}
                  sx={{
                    color: "text.primary",
                    mx: 1,
                    textTransform: "none",
                    fontWeight: "medium",
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: { xs: 0, md: 0.05 } }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar alt="User Avatar" src="/images/top-nav/user-avatar.svg" />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                aria-label="account of current user"
                color="inherit"
                onClick={toggleDrawer(true)}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        onClose={toggleDrawer(false)}
        open={isMenuOpen}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
