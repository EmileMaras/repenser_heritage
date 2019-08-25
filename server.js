const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());
// Pdf route that will serve pdf

app.get("/pdf", (req, res) => {
  var file = fs.createReadStream("./RepenserLHeritage.pdf");
  file.pipe(res);
});
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));



