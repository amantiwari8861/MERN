const { greet, getAllUsers, getUserById, addUser, updateUser, deleteUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/greet",greet);// get http://localhost:5000/api/v1/users/greet

router.get("/",getAllUsers);// get http://localhost:5000/api/v1/users
router.get("/:id",getUserById);// get http://localhost:5000/api/v1/users/:id
router.post("/",addUser);// post http://localhost:5000/api/v1/users {}
router.put("/:id",updateUser);// get http://localhost:5000/api/v1/users
router.delete("/:id",deleteUser);// get http://localhost:5000/api/v1/users

exports.userRouter = router;