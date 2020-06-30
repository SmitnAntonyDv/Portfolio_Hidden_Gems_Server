require('dotenv').config();

const express = require('express');
const loggerMiddleWare = require('morgan');
const corseMiddleWare = require('cors');
const { PORT } = require('./config/constants');

const userRouter = require('./routers/user');

//import routers once created
const app = express();

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
app.get('/user', userRouter);

// listen for connection on port (default port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
