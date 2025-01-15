const userModel = require("../entities/UserModel");
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;
const router = require("express").Router();
router.post("/login", async (req, res) => {
    const { username, password, role } = req.body;
    console.log(username, password, role);

    if (role === "admin") {
        res.send("will do later!");
    }
    else if (role === "user") {

        try {
            console.log("user login..");
            const user = await userModel.validateUser(username, password);
            console.log("Auth User:",user);
            
            const token = jwt.sign({ "id": user.id, "username": username, "role": "user" }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ "token":token });
        }
        catch (err) {
            console.log("err..");
            res.json({ "msg": "invalid credentials!" });
        }
    }
});

exports.loginRouter = router;


// app.post('/userlogin', async (req, res) => {
//     const { username, password } = req.body;
//     // Check if user exists
//     const user = users.find(u => u.username === username);
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     // Validate password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

//     // Generate JWT
//     const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

//     res.json({ token });
// });