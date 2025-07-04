import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1599117583064-48d912976a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1681488144886-9c633f9799c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1625058620921-6d34160eb193?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1476044591369-74ee6ac6899c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 81
                ? RAIN_URL
                : info.temp > 27
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {
              info.humidity > 81
                ? <ThunderstormIcon/>
                : info.temp > 27
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Tempture = {info.temp}&deg;c</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;c</p>
              <p>Max Temp = {info.tempMax}&deg;c</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like = {info.feelsLike}&deg;c
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
