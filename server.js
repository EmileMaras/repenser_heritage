const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 4000;
const cors = require("cors");
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];
app.use(cors({ origin: allowedOrigins }));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/pdf", (req, res) => {
  var file = fs.createReadStream(path.join(__dirname, "RepenserLHeritage.pdf"));
  file.pipe(res);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));



