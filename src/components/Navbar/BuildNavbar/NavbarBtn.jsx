import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const NavbarBtn = (props) => {
  return (
    <Link to={props.data.path} sx={{ color: "#FFF", textDecoration: "none" }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Link
              to={props.data.path}
              sx={{ color: "#FFF", textDirection: "none" }}
            >
              {props.data.icon}
            </Link>
          </ListItemIcon>
          <ListItemText primary={props.data.name} sx={{ color: "#FFF" }} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default NavbarBtn;
