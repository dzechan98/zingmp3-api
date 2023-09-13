const path = require("path");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;

//Page Home
app.get("/", (req, res) => {
    res.send("SERVER ON");
});

//ZingMp3 Router
const ZingMp3Router = require("./src/routes/ZingRouter");
app.use("/api", cors({ origin: "*" }), ZingMp3Router);

//Page Error
app.get("*", (req, res) => {
    res.send("Nhập sai đường dẫn! Vui lòng nhập lại >.<");
});

app.listen(PORT, () => {
    console.log(`Start server listen at http://localhost:${PORT}`);
});
