require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

// routes

// port configuration
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server spinning on PORT:${PORT}`));
