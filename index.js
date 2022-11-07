const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

const token = process.env.token;
const url = process.env.url;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
  }
});

const PORT = 3100;
app.listen(3100, () => {
  console.log("Serveur on fire on port " + PORT + " ! 🔥🔥🔥🔥🔥🔥");
});
