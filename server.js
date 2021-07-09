require("dotenv").config();
import path from "path";
import express from "express";

const app = express();
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => res.send("hello"));

// TODO:
// "/dashboard" , "/login"
// extra

// port configuration
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server spinning on PORT:${PORT}`));
