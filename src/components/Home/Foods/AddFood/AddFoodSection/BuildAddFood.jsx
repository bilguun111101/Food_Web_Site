import { CardMedia, Card, Button, Backdrop, Box, Input } from "@mui/material";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SetData } from "../../../../SetData";
import { useState, useEffect, useRef } from "react";
import { styles } from "../../Order/OrderStyle";

export default function BuildAddFood(props) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Card sx={styles.cardSection}>
          <Button sx={styles.closeBtn} onClick={{}}>
            <CloseIcon sx={{ fontSize: "3em" }} />
          </Button>
          <CardMedia image={{}} sx={styles.img} />
          <Box
            sx={{
              width: "50%",
              padding: "2em",
            }}
          >
            <Typography component="div" variant="h5">
              {{}}
            </Typography>
            <Box sx={styles.getImpormation}>
              <Input type="email" placeholder="Email..." inputRef={{}} />
              <Input
                type="number"
                placeholder="Хэдэн хүний порц..."
                inputRef={{}}
              />
              <Input placeholder="Гэрийн хаяг..." inputRef={{}} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Button onClick={{}}>
                  <ShoppingCartIcon sx={{ fontSize: "2em", color: "#000" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Backdrop>
    </div>
  );
}
