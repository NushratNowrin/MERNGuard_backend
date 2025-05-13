const { authRoutes } = require("../routes");
const helmet = require("helmet");
const errorHandler = require("../middlewares/errorMiddleare");
var cookieParser = require("cookie-parser");
const express = require("express");

exports.appConfig = (app) => {
	const port = process.env.PORT || 5500;
	app.use(helmet());
	app.use(cookieParser());
	app.use(express.json());
	app.use("/api/auth", authRoutes);

	app.get("/", (req, res) => {
		res.send("Hello, backend is tested");
	});
	app.use(errorHandler);

	app.listen(port, () => {
		console.log(`App Listening on port ${port}`);
	});
};
