import { Box } from "@mui/material";
import React from "react";
import MediaCard from "./Card/Card";

const styles = {
  topBox: {
    background: "#F5F5F7", 
    width: "100vw",
    minHeight: "100vh",
  },
  rightScroll: {
    width: "100vw",
    borderBottom: "1px solid #000",
    display: "flex",
    paddingTop: "5.2em",
    paddingLeft: "1em",
    paddingBottom: "1em",
    overflow: "scroll",
    gap: "1em"
  }
}

const Home = (props) => {
  return (
    <Box sx={styles.topBox}>
      <Box sx={styles.rightScroll}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Box>
    </Box>
  )
};

export default Home;
