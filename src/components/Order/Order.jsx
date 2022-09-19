import { Box, Typography, Card, Toolbar } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styles } from "./OrderStyle";
import useGetData from "../TakeData";
import { useState, useEffect } from "react";
import { useTopTittleContext } from "../../context";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Order = (props) => {
  const ordersa = useGetData("orders");
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState([]);

  const days = [
    { week: `Даваа`, datas: [] },
    { week: `Мягмар`, datas: [] },
    { week: `Лхагва`, datas: [] },
    { week: `Пүрэв`, datas: [] },
    { week: `Баасан`, datas: [] },
    { week: `Бямба`, datas: [] },
    { week: `Ням`, datas: [] },
  ];
  const [daysDatas, setDaysDatas] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const connect = async () => {
      try {
        let arr = [];
        const response = await getDocs(collection(db, "orders"));
        response.forEach((doc) => {
          arr.push({ data: doc.data().data, uid: doc.id });
          // setData([...arr, { data: doc.data().data, uid: doc.id }]);
        });
        // console.log(arr);
        setData((old) => (old = arr));
      } catch (err) {
        console.log(err.message);
      }
    };
    connect();
    if (data.length !== 0) {
      console.log(data);
    }

    // days.forEach((el, idx) => {
    //   data.forEach((e, i) => {
    //     if (el.week === e.data.week) {
    //       days[idx].datas.push(e);
    //     }
    //   });
    // });
    if (data.length !== 0) {
      for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (days[i].week === data[j].data.week) {
            days[i].datas.push(data[j]);
          }
        }
      }
      console.log(days);
    }
  }, []);

  return (
    <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {days.map((el, idx) => {
          return (
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
                    <Typography>{}</Typography>
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
