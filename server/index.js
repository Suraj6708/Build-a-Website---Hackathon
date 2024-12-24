const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");

const AuthRouter = require("./routes/AuthRouter");
const UploadRouter = require("./routes/uploadvid");
// const upload = require("")
const SaveRouter = require("./routes/savevid");

const app = express();
require("dotenv").config();
require("./models/db");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", AuthRouter);

app.use("/api/upload", UploadRouter);

app.use("/api/videos", SaveRouter);

app.get("/ping", (req, res) => {
  res.send("hello server");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});