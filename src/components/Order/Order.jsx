import { Box, Typography, Card } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styles } from "./OrderStyle";
import useGetData from "../TakeData";
import { useState } from "react";
import { useEffect } from "react";

const Order = (props) => {
  const orders = useGetData("orders");
  const days = [`Даваа`, `Мягмар`, `Лхагва`, `Пүрэв`, `Баасан`, `Бямба`, `Ням`];
  const daysNumber = [1, 2, 3, 4, 5, 6, 7];
  const [week, setWeek] = useState([]);
  // console.log(orders);
  // orders.forEach((el, idx) => {})

  return (
    <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {/* a */}
        <Card sx={styles.dayWithCard}>
          <Box sx={styles.dayTitleSection}>
            <Typography>Даваа</Typography>
            <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
              <ViewInArIcon />
              <Typography>{}</Typography>
            </Box>
          </Box>
          <Card sx={styles.orderCardSection}>
            <CustomizedAccordions />
            {/* <CustomizedAccordions />
            <CustomizedAccordions /> */}
          </Card>
        </Card>
      </Box>
    </Box>
  );
};

export default Order;
