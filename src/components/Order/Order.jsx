import { Box, Typography, Card } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const Order = (props) => {
  return (
    <Box sx={{ background: "#F5F5F7", width: "100vw", minHeight: "100vh", paddingTop: "5.2em" }}>
      <Box sx={{ width: "100%", overflow: "scroll", paddingLeft: "1em", paddingRight: "1em", display: "flex", minHeight: "40vh", boxShadow: "0 0 5px silver", gap: "1em" }}>
        {/* a */}
        <Card sx={{ width: "300px", height: "60vh", backgroundColor: "", gap: "1em", padding: "1em", position: "relative" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: '1em', position: "sticky", top: "0%" }}>
            <Typography>Өглөө</Typography>
            <Box sx={{ display: "flex" }}>
              <ViewInArIcon />
              <Typography>12</Typography>
            </Box>
          </Box>
          <Card sx={{overflow: "scroll", width: "100%", height: "100%"}}>
            <CustomizedAccordions />
            <CustomizedAccordions />
            <CustomizedAccordions />
          </Card>
        </Card>
      </Box>
    </Box>);
};

export default Order;
