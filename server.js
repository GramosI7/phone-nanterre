const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

const apiPhone = require("./routes/phone");

app.use("/phone", apiPhone);

app.listen(PORT, () => {
  console.log("server is running in the PORT: " + PORT);
});
