require("dotenv").config()
const express = require("express");
const { authMiddleware } = require("./middlewares/AuthMiddleWare");
const { loggingMiddleware } = require("./middlewares/LoggingMiddleWare");
const { userRouter } = require("./routers/userRoutes");
const testMongoose = require("./entities/testmongoose");
const mongoose = require("mongoose");
const { loginRouter } = require("./routers/loginRouter");

const app = express();
const HOST_NAME = process.env.HOST_NAME;
const SERVER_PORT = process.env.SERVER_PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggingMiddleware);// app level middleware

app.use("/api/v1/users", userRouter);// http://localhost:5000/api/v1/users
// app.use("/api/v1/admins",userRouter);// http://localhost:5000/api/v1/users
// app.use("/api/v1/products",userRouter);// http://localhost:5000/api/v1/users

app.listen(SERVER_PORT, HOST_NAME, (req, res) => {
    console.log(`Our application is listening on ${HOST_NAME} at port ${SERVER_PORT}`);
})

app.get("/", (request, response) => {
    response.send("Server is Up and running!");
    // response.json({ "data": "Hello Everyone! 1" });
})
app.get("*", (request, response) => {
    // console.log(request);
    response.status(404);
    response.send("404 page Not Found!");// plain text
    // console.log(response);
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.use("/api/v1",loginRouter);
mongoose.connect(process.env.MONGO_URI);

/* console.log("Hello in express!");
console.log(process.env.SERVER_PORT);
console.log(process.env.HOST_NAME);

MVC -> Model View Controller
Middleware
JWT (json web token)
Routes
Mongoose 
 */