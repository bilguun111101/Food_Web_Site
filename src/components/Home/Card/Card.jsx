import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';

const styles = {
    card: {
        width: "300px",
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
    },
    name: {
        fontSize: '140%',
    },
    btn: {
        width: "4em"
    },
    bottom: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
}

export default function MediaCard(props) {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={styles.name}>
            Easy recipes
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingLeft: "18px" }}>
        <Box sx={styles.bottom}>
            <Typography component="div" variant='h7'>sad</Typography>
            <Button sx={styles.btn}>
                <RemoveIcon color="error" />
            </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
