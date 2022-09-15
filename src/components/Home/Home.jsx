import React, { useState } from "react";
import MediaCard from "./Card/Card";
import Food from "./Foods/Food";
import {
  Card,
  Box,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styles } from "./HomeWithinStyle";
import { useEffect } from "react";
import useGetData from "../TakeData";
import { useTopTittleContext } from "../../context";
import SimpleBackdrop from "./Foods/Order/OrderFood";
import { useSearchContext } from "../../searchContext";
import AddFood from "./Foods/AddFood/AddFood";
import BuildAddFood from "./Foods/AddFood/AddFoodSection/BuildAddFood";

const Home = (props) => {
  const [data, setData] = useState([]);
  // const { loading } = useTopTittleContext();
  const { search } = useSearchContext();
  const [loading, setLoading] = useState(false);
  const saveData = useGetData("foods");
  const [addBoolean, setAddBoolean] = useState(false);

  const add = () => {
    setAddBoolean(true);
  };

  useEffect(() => {
    setData(saveData);
  }, [saveData]);

  return (
    <Box sx={styles.topBox}>
      <Box sx={styles.rightScroll}>
        {data.map((el, idx) => (
          <MediaCard key={idx} data={el} />
        ))}
      </Box>

      <Box sx={styles.foodsSection}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <AddFood setAdd={add} add={addBoolean} />
            {/* <BuildAddFood /> */}
            {/* {addBoolean ? } */}
            {data
              .filter((el, idx) => {
                if (search === "") return el;
                else if (el.name.includes(search)) return el;
              })
              .map((el, idx) => (
                <Food key={idx} data={el} />
              ))}
            <SimpleBackdrop />
            {/* <BuildAddFood /> */}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
