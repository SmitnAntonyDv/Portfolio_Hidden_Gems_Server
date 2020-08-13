require('dotenv').config();
const express = require('express');
const corseMiddleWare = require('cors');
const loggerMiddleWare = require('morgan');
const { PORT } = require('./config/constants');
const authMiddleWare = require('./auth/middleware');

const userRouter = require('./routers/user');
const countryRouter = require('./routers/country');
const authRouter = require('./routers/auth');
const locationpostRouter = require('./routers/locationposts');

//import routers once created
const app = express();

//middleware
app.use(corseMiddleWare());
app.use(loggerMiddleWare('dev'));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

//delay
if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// Routes below!
app.get('/user', userRouter);
app.get('/locations', countryRouter);
app.get('/locations/:id/posts', countryRouter);
app.get('/locationpost/:postId', locationpostRouter);

app.post('/newpost', authMiddleWare, locationpostRouter);
app.patch('/locationposts/:postId', authMiddleWare, locationpostRouter);
app.delete('/locationposts/:postId', authMiddleWare, locationpostRouter);

//SignUp and Login
app.use('/', authRouter);

// listen for connection on port (default port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
