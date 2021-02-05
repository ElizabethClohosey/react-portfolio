const path = require("path");
const express = require("express");

const app = express();

app.use(express);

// const routes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;

// app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
  console.log(res);
});

// app.get("/city", function (req, res) {
//   res.send("help");
// });

app.use('/', express.static(path.join(__dirname, 'components/content.jsx')))

app.listen(PORT, function() {
  console.log("🌎 ==> API server now on port: " + PORT);
});