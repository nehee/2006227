const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8008;

// GET /numbers API
app.get("/numbers", async (req, res) => {
  const { url } = req.query;
  if (!url || !Array.isArray(url)) {
    return res.status(400).json({ error: "Invalid URL parameter" });
  }

  try {
    const results = await Promise.all(url.map(fetchData));
    const numbers = results
      .filter((result) => Array.isArray(result.data.numbers))
      .flatMap((result) => result.data.numbers);

    res.json({ numbers });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Helper function to fetch data from a URL
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return { data: {} };
  }
}

// Start the server
app.listen(PORT, () => {
  console.log(`Number Management Service is running on port ${PORT}`);
});