const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks.js");
app.use(cors());
app.use(express.json());
app.use("/", tasks);
app.use(express.static("public"));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
