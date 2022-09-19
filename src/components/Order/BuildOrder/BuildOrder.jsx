import { useState } from "react";
import { Typography, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./BuildOrderStyle";

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = useState(false);
  const propsy = props.data;

  const [checked, setChecked] = useState([0]);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        marginBottom: "1em",
        backgroundColor: "#FFF",
        borderBottom: "1px solid silver",
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{propsy.dayTime}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#FFF",
              borderBottom: "1px solid silver",
            }}
          >
            {/* ы */}
            <ListItem
              secondaryAction={<ListItemText primary={`x${propsy.quantity}`} />}
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={propsy.name} />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderTop: "1px solid silver",
            }}
          >
            <ListItem sx={{ gap: "1em" }}>
              <LocationOnIcon sx={{ color: "#09C900" }} />
              <ListItemText primary={propsy.address} />
            </ListItem>
          </List>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
