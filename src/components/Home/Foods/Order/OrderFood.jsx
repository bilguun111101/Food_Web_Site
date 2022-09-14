import { useOrderContext } from "../../../../orderContext";
import { CardMedia, Card, Button, Backdrop, Box, Input } from "@mui/material";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styles } from "./OrderStyle";
import { SetData } from "../../../SetData";
import { useState, useEffect, useRef } from "react";

export default function SimpleBackdrop() {
  const email = useRef(null);
  const day = useRef(null);
  const clock = useRef(null);
  const ports = useRef(null);
  const address = useRef(null);
  const month = useRef(null);
  const [setBool, setSetBool] = useState(false);
  const { booleanDet, setBooleanDet, orderDetail, setOrderDetail } =
    useOrderContext();
  const handleClose = () => {
    setBooleanDet(false);
  };
  const handleToggle = () => {
    setBooleanDet(true);
  };
  const handleOrder = () => {
    if (
      !email.current.value.includes("@") ||
      email.current.value.lenght <= 2 ||
      ports.current.value === "" ||
      address.current.value.lenght <= 5 ||
      month.current.value === "" ||
      clock.current.value === "" ||
      day.current.value === ""
    ) {
      alert("Мэдээлэл дутуу байна!!!");
    } else {
      const total = orderDetail.cost * +ports.current.value;
      setOrderDetail({
        ...orderDetail,
        ["email"]: email.current.value,
        ["quantity"]: ports.current.value,
        ["address"]: address.current.value,
        ["month"]: month.current.value,
        ["clock"]: clock.current.value,
        ["day"]: day.current.value,
        ["total"]: total,
      });
      setSetBool(true);
    }
  };

  useEffect(() => {
    if (setBool) {
      SetData("orders", orderDetail);
      setSetBool(false);
      setBooleanDet(false);
      ports.current.value = "";
      email.current.value = "";
      address.current.value = "";
      month.current.value = "";
      clock.current.value = "";
      day.current.value = "";
    }
  }, [setBool]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={booleanDet}
      >
        <Card sx={styles.cardSection}>
          <Button sx={styles.closeBtn} onClick={handleClose}>
            <CloseIcon sx={{ fontSize: "3em" }} />
          </Button>
          <CardMedia image={orderDetail.image} sx={styles.img} />
          <Box
            sx={{
              width: "50%",
              padding: "2em",
            }}
          >
            <Typography component="div" variant="h5">
              {orderDetail.name}
            </Typography>
            <Box sx={styles.getImpormation}>
              <Input type="email" placeholder="Email..." inputRef={email} />
              <Input
                type="number"
                placeholder="Хэдэн хүний порц..."
                inputRef={ports}
              />
              <Input placeholder="Гэрийн хаяг..." inputRef={address} />
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Input type="number" placeholder="Сар..." inputRef={month} />
                <Input type="number" placeholder="Өдөр..." inputRef={day} />
                <Input type="number" placeholder="Цаг..." inputRef={clock} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Button onClick={handleOrder}>
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
