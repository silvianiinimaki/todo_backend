const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const db = [
  {
    id: 1,
    title: "Make an app",
    description: "ToDo-app",
    deadline: "2020-12-20",
    tag: "project",
    rating: 5,
    checked: false,
    creation_date: 2020 - 11 - 24,
    last_edited: 2020 - 11 - 24,
    user_id: 3,
  },
];

app.get("/", (req, res) => {
  res.send(db);
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
