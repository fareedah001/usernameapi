const express = require("express");
const app = express();

app.use(express.json());

const arraySport = ["football", "basketball", "table tennis"];

function generateusername(name) {
  let username = name + 2343 + "abc";
  return username;
}

function generateSport() {
  let sport = Math.floor(Math.random(arraySport.length));
  return arraySport[sport];
}

app.post("/username/api", (req, res) => {
  const data = {
    name: req.body.name,
    username: generateusername(req.body.name),
    sport: generateSport(),
  };

  res.send(data);
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listening on port ${port}`));
