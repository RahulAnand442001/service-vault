require("dotenv").config();
import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";

// app initialization
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// database initialization
mongoose
	.connect("mongodb://localhost:27017/store-locator", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("DataBase Connected");
	});

// routes configuration
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "public/views/index.html")),
);

// admin models
const User = mongoose.model("User", { username: String, password: String });

app.get("/register", (req, res) => {
	res.sendFile(path.join(__dirname, "public/views/register.html"));
});

app.post("/register", (req, res) => {
	let username = `${req.body.username}`;
	let plainPassword = `${req.body.password}`;
	let securePassword = crypto
		.createHmac("sha256", "10")
		.update(plainPassword)
		.digest("hex");
	let user = new User({ username, password: securePassword });
	user.save();
	res.redirect("/register");
});

app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "public/views/login.html"));
});

app.post("/login", (req, res) => {
	const { username, password } = req.body;
	User.findOne({ username: username }, (err, user) => {
		if (err || !user) {
			res.redirect("/login");
		} else {
			let encryptedPassword = crypto
				.createHmac("sha256", "10")
				.update(password)
				.digest("hex");
			if (user.password === encryptedPassword) {
				res.redirect("/dashboard");
			} else {
				res.redirect("/login");
			}
		}
	});
});

app.get("/dashboard", (req, res) => res.send("Dashboard Page"));

// port configuration & server initialization
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server running on port : 8000"));
