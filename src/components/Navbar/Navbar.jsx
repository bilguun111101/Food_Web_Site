import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavbarBtn from './BuildNavbar/NavbarBtn';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { navbarBtns } from './NavbarBtns';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import { AppBar, Main, DrawerHeader } from './NavbarStyles';

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("2 сарын 7-14");

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ width: "100vw", diplay: "flex", justifyContent: "space-between" }}>
          <Toolbar sx={{ gap: "2em" }}>
            <Typography onClick={() => setOpen(true)} variant="h6" component="div">
              Захиалга
            </Typography>
            <FormControl fullWidth sx={{ width: "20vw" }}>
              <InputLabel id="demo-simple-select-label">2 сарын 7-14</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label={date}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
          <Toolbar>
            <Button>
              <SearchIcon color="#FFF" />
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navbarBtns.map((text, index) => <NavbarBtn data={text} index={index} key={index}/>)}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <Router>
          <div>
            <Routes>
              <Route path="/order" component={{  }}/>
              <Route path="/chart" component={{  }}/>
              <Route path="/settings" component={{  }}/>
              <Route path="/menu" component={{  }}/>
            </Routes>
          </div>
        </Router>
      </Main>
    </Box>
  );
}