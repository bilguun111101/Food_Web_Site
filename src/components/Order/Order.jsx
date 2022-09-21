import { Box, Typography, Card, Toolbar } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./BuildOrder/BuildOrder";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styles } from "./OrderStyle";
import useGetData from "../TakeData";
import { useState, useEffect } from "react";
import { useTopTittleContext } from "../../context";
import { doc, collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Order = (props) => {
  const ordersa = useGetData("orders");
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState([]);

  const days = [`Даваа`, `Мягмар`, `Лхагва`, `Пүрэв`, `Баасан`, `Бямба`, `Ням`];
  const [daysDatas, setDaysDatas] = useState([]);
  const [datas, setDatas] = useState([]);
  const colRef = collection(db, "orders")

  useEffect(() => {
    const connect = async () => {
      try {
        // // const colRef = collection(db, "orders")
        // for(let i = 0; i < days.length; i++) {
        //   let q = query(colRef, where("week", "==", days[i]));
        //   onSnapshot(q, (snap) => {
        //     // snap.docs.forEach(doc => {
        //     //   setData([...data, doc.data()]);
        //     // })
        //     snap.docs.map((doc, idx) => setData([...data, {...doc.data(), uid: doc.id}]))
        //     setDatas(old => [...old, { week: days[i], datas: data }])
        //   })
          // const q = query(colRef, where("week", "==", ))
          // const querySnapshot = await getDocs(q);
          console.log()
          // setDatas(querySnapshot);
      } catch(err) {
        console.log(err.message);
      }
    };
    connect();
  }, []);

  return (
    <Box sx={styles.weekSection}>
      <Box sx={styles.daySection}>
        {days.map(async (el, idx) => {
          // const q = query(colRef, where("week", "==", el))
          // const querySnapshot = await getDocs(q);
          // console.log(querySnapshot);
          // querySnapshot.map(doc => console.log(doc.data()));
          return (
            <Card sx={styles.dayWithCard} key={idx}>
              <Box sx={styles.dayTitleSection}>
                <Typography>{el}</Typography>
                <Box sx={{ display: "flex", backgroundColor: "#FFF" }}>
                  <ViewInArIcon />
                  {/* <Typography>{querySnapshot.docs.length}</Typography> */}
                </Box>
              </Box>
              <Card sx={styles.orderCardSection}>
                {/* {days.map((el, idx) => <CustomizedAccordions key={idx} title={el.week}/>)} */}
                {/* {el.datas.map((e, i) => <CustomizedAccordions key={i} data={e.data} id={e.uid}/>)} */}
                {/* {querySnapshot.map((doc, idx) => <CustomizedAccordions key={idx} data={doc.data()} id={doc.uid}/>)} */}
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
