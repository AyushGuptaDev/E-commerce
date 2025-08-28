require("dotenv").config();
const app = require("./app");
const ConnectDb = require("./db/index");

ConnectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port " + process.env.PORT);
    });
  })

  .catch((error) => {
    console.log("Error while starting the server: " + error);
  });
