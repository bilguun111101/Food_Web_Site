import { Box, Typography, Card, Toolbar } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styles } from "./OrderStyle";
import useGetData from "../TakeData";
import _ from "lodash";
// import { useState, useEffect } from "react";
import { useTopTittleContext } from "../../context";
// import { doc, collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
// import { db } from "../../firebase";

const Order = (props) => {
  const orders = useGetData("orders");

  const days = [`Даваа`, `Мягмар`, `Лхагва`, `Пүрэв`, `Баасан`, `Бямба`, `Ням`];

  return (
    <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {days.map(async (el, idx) => {
          // const saveThisWeekData = _.find(orders, { 'week': el })
          const saveThisWeekData = orders.filter((ele, idx) => ele.week === el)
          return (
            <Card sx={styles.dayWithCard} key={idx}>
              <Box sx={styles.dayTitleSection}>
                <Typography>{el}</Typography>
                <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                  <ViewInArIcon />
                  <Typography>{saveThisWeekData.length}</Typography>
                </Box>
              </Box>
              <Card sx={styles.orderCardSection}>
                {/* {orders.filter((ele, idx) => ele.week === el).map((el, index) => <CustomizedAccordions key={index} data={el} uid={el.uid}/>)} */}
                {saveThisWeekData.map((el, idx) => <CustomizedAccordions key={idx} data={el} uid={el.uid}/>)}
              </Card>
            </Card>
          );
        })}
      </Box>

      <Box sx={styles.packedSection}>
        <Box sx={styles.packedTitle}>
          <Typography component="div" variant="h5">
            Савласан
          </Typography>
        </Box>
        <Box sx={styles.packedSectionWithin}>
          {days.map((el, idx) => {
            return (
              <Card sx={styles.dayWithCard} key={idx}>
                <Box sx={styles.dayTitleSection}>
                  <Typography>{el.week}</Typography>
                  <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                    <ViewInArIcon />
                    <Typography>{el}</Typography>
                  </Box>
                </Box>
                <Card sx={styles.orderCardSection}>
                  {/* {days.map((el, idx) => <CustomizedAccordions key={idx} title={el.week}/>)} */}
                </Card>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
