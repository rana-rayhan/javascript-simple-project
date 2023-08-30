const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const apiKey = "95cf1f316215e33c49b53a50902dadb2";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/weather", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/weather", async (req, res) => {
  const city = req.body.city;

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weatherData = {
      temperature: Math.round(data.main.temp - 273.15) + " °Celsius",
      humidity: data.main.humidity,
      city: data.name,
    };
    res.json(weatherData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error retrieving weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
