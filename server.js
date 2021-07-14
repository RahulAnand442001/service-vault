require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// app initialization
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes configuration
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "public/views/login.html")),
);

app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "public/views/login.html"));
});

app.get("/orders", (req, res) =>
	res.sendFile(path.join(__dirname, "public/views/index.html")),
);

app.post("/login", (req, res) => {
	res.redirect("/orders");
});

// port configuration & server initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port : 3000"));
