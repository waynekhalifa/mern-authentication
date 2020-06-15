const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// connect to mongo db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected."));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// server routes
const authRoutes = require('./routes/auth')

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', authRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
