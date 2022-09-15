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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const [checked, setChecked] = useState([0]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ marginBottom: "1em", backgroundColor: "pink", borderRadius: "1em" }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Өглөө</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {/* ы */}
            <ListItem
              secondaryAction={<ListItemText primary={`x2`} />}
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
                <ListItemText primary={`Кимчи Жигээ`} />
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
              <ListItemText primary={`СБД 7р хороо 4 байр 89 тоот`} />
            </ListItem>
            <ListItem sx={{ gap: "1em" }}>
              <LocalPhoneIcon sx={{ color: "#09C900" }} />
              <ListItemText primary={`СБД 7р хороо 4 байр 89 тоот`} />
            </ListItem>
          </List>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
