require("dotenv").config();
const express = require("express");
const loggerMiddleWare = require("morgan");
const corseMiddleWare = require("cors");
const { PORT } = require("./config/constants");

const userRouter = require("./routers/user");
const countryRouter = require("./routers/country");
const authRouter = require("./routers/auth");

//import routers once created
const app = express();

//middleware
app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corseMiddleWare());

//delay
if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// Routes below!
app.get("/user", userRouter);
app.get("/locations", countryRouter);
app.get("/locations/:id/posts", countryRouter);

//SignUp and Login
app.use("/", authRouter);

// listen for connection on port (default port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
