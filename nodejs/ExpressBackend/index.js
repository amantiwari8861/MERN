const express = require("express");
const { authMiddleware } = require("./middlewares/AuthMiddleWare");
const { loggingMiddleware } = require("./middlewares/LoggingMiddleWare");
require("dotenv").config()

const app = express();
const HOST_NAME = process.env.HOST_NAME;
const SERVER_PORT = process.env.SERVER_PORT || 8080;
app.use(express.urlencoded({extended:true}));
//application level middlewares
app.use(authMiddleware);
app.use(loggingMiddleware);


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
/* console.log("Hello in express!");
console.log(process.env.SERVER_PORT);
console.log(process.env.HOST_NAME);

MVC -> Model View Controller
Middleware
JWT (json web token)
Routes
Mongoose 
 */