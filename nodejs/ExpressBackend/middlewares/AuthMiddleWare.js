const base64=require("base-64");

let authMiddleware = (req, res, next) => {
    console.log("authenticating...");
    console.log(req.headers);
    const {authorization}=req.headers;
    console.log(authorization);
    const credentials=authorization.split(" ")[1];
    const [username,password]=base64.decode(credentials).split(":");
    console.log(username,password);
    // if (req.hostname === "localhost" && req.secure === false && req.protocol === "http") {
    if (!(username==="aman" && password==="1234")) {
        res.status(403).send("get lost");
    }
    else {
        next();
    }
};
exports.authMiddleware = authMiddleware;


/*

    console.log(req.ip);
    console.log(req.get('Content-Type'));
    console.log(req.headers);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.hostname);
*/