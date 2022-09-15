import { Box } from "@mui/system";
import React from "react";
import { styles } from "../FoodStyle";
// import { Card, Box, CardMedia, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardMedia, Typography, Button } from "@mui/material";

const AddFood = (props) => {
  return (
    <Card sx={styles.cardSection}>
      <CardMedia image="" component="img" sx={styles.img} />
      <Box sx={styles.foodImpormation}>
        <Typography component="div" variant="h6" sx={{ marginTop: "10px" }}>
          Add
        </Typography>
        <Box sx={styles.addFood}>
          <Typography>
            <Button onClick={props.add}>
              <AddIcon color="success" />
            </Button>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AddFood;
