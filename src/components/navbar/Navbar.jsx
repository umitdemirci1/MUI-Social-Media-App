import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          S.Media
        </Typography>
        <CameraAltIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase sx={{ width: "100%" }} placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Badge>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              onClick={() => setOpen(true)}
            />
          </Badge>
        </Icons>
        <UserBox>
          <Badge>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              onClick={() => setOpen(true)}
            />
          </Badge>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
