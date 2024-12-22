const express = require("express");
const app = express();

// listen(포트번호, 실행문)
app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + `/index.html`);
});
