import { Box, Typography, Card, Toolbar } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styles } from "./OrderStyle";
import useGetData from "../TakeData";
import { useState, useEffect } from "react";

const Order = props => {
  const orders = useGetData("orders");
  const days = [
    {week: `Даваа`}, 
    {week: `Мягмар`}, 
    {week: `Лхагва`},
    {week: `Пүрэв`},
    {week: `Баасан`},
    {week: `Бямба`},
    {week: `Ням`}
  ]
  const [daysDatas, setDaysDatas] = useState([])
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    for(let i = 0; i < days.length; i++) {
      for(let j = 0; j < orders.length; j++) {
        if(days[i].week === orders[j].data.week) {
          setDatas([...datas, orders[j]]);
          // setDaysDatas([...daysDatas, {["week"]: days[i].week, ["datas"]: orders[j].data, ["uid"]: orders[j].uid}]);
        }
        setDaysDatas([...daysDatas, {["week"]: days[i].week, ["datas"]: datas}]);
      }
      // setDaysDatas([...daysDatas, {["week"]: days[i].week, ["datas"]: datas}]);
      setDatas([]);
    }
  }, [orders])

  console.log(daysDatas)


  return (
    <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {days.map((el, idx) => {
          return(
            <Card sx={styles.dayWithCard} key={idx}>
            <Box sx={styles.dayTitleSection}>
              <Typography>{el.week}</Typography>
              <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                <ViewInArIcon />
                <Typography>{12}</Typography>
              </Box>
            </Box>
            <Card sx={styles.orderCardSection}>
              {/* {days.map((el, idx) => <CustomizedAccordions key={idx} title={el.week}/>)} */}
              {/* {el.datas.map((e, i) => <CustomizedAccordions key={i} data={e.data} id={e.uid}/>)} */}
            </Card>
        </Card>
          )
        })}
      </Box>
      
      <Box sx={styles.packedSection}>
        <Box sx={styles.packedTitle}>
          <Typography component="div" variant="h5">Савласан</Typography>
        </Box>
        <Box sx={styles.packedSectionWithin}>
          {days.map((el, idx) => {
            return(
              <Card sx={styles.dayWithCard} key={idx}>
                <Box sx={styles.dayTitleSection}>
                  <Typography>{el.week}</Typography>
                  <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                    <ViewInArIcon />
                    <Typography>{}</Typography>
                  </Box>
                </Box>
                <Card sx={styles.orderCardSection}>
                  {/* {days.map((el, idx) => <CustomizedAccordions key={idx} title={el.week}/>)} */}
                </Card>
              </Card>
            )
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
