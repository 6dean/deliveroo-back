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

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

const PORT = process.env || 3100;
app.listen(PORT, () => {
  console.log("Serveur on fire on port " + PORT + " ! 🔥🔥🔥🔥🔥🔥");
});
