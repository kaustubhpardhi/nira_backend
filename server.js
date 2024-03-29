require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Add X-Frame-Options middleware
app.use(function (req, res, next) {
  res.header("X-Frame-Options", "SAMEORIGIN");
  next();
});

// Add X-XSS-Protection middleware using helmet
app.use(helmet.xssFilter());

// Add Cache-control: no-store and Pragma: no-cache headers
app.use(function (req, res, next) {
  res.header("Cache-Control", "no-store");
  res.header("Pragma", "no-cache");
  next();
});

//Routes
app.use("/user", require("./routes/userRoute"));
app.use("/receipt", require("./routes/receipt"));
app.use("/transaction", require("./routes/transaction"));
app.use("/ornament", require("./routes/ornament"));

//Connect to mongo Db
const uri = process.env.MONGODB_URI;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

app.use("/", (req, res, next) => {
  res.json({ message: "Hello nira on aws" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is Running at Port Number:${PORT}`);
});
