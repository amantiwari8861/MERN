const express = require("express")
require("dotenv").config()

const app = express();
const HOST_NAME = process.env.HOST_NAME;
const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, HOST_NAME, (req, res) => {
    console.log(`Our application is listening on ${HOST_NAME} at port ${SERVER_PORT}`);
})


app.get("/", (request, response) => {
    // response.send("Server is Up and running!");
    response.json({ "data": "Hello Everyone! 1" });
})
app.get("*", (request, response) => {
    // console.log(request);
    response.status(404);
    response.send("404 page Not Found!");// plain text
    console.log(response);
})

// console.log("Hello in express!");
// console.log(process.env.SERVER_PORT);
// console.log(process.env.HOST_NAME);

// MVC -> Model View Controller
// Middleware
// JWT (json web token)
// Routes
// Mongoose 

// MongoDB