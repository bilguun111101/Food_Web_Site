import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@mui/material';

const NavbarBtn = props => {
  return (
    <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <Link to={props.data.path}>
                {props.data.icon}
            </Link>
        </ListItemIcon>
        <ListItemText primary={props.data.name} />
        </ListItemButton>
    </ListItem>
  )
}

export default NavbarBtn