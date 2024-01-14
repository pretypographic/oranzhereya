/* eslint-disable no-undef */
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/opa2gepe9";
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./routes/router");

mongoose.connect(MONGODB_URI);

const app = express();

app.use(express.static("client/build"));
app.use(router);
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
