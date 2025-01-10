const { greet, getAllUsers, getUserById, addUser, updateUserBy_Id, deleteUserBy_Id, addAll, updateUserBy_userId, deleteUserBy_userId, validateUserCredentials } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/AuthMiddleWare");

const router = require("express").Router();
router.use(authMiddleware);// Router level middleware
router.get("/greet", greet);// get http://localhost:5000/api/v1/users/greet

router.get("/", getAllUsers);// get http://localhost:5000/api/v1/users
router.get("/:id", getUserById);// get http://localhost:5000/api/v1/users/:id
router.post("/", addUser);// post http://localhost:5000/api/v1/users {}
router.post("/addall", addAll);// post http://localhost:5000/api/v1/users {}
router.post("/validate", validateUserCredentials);// post http://localhost:5000/api/v1/users {}
router.put("/:id", updateUserBy_Id);// get http://localhost:5000/api/v1/users
router.delete("/:id", deleteUserBy_Id);// get http://localhost:5000/api/v1/users
router.put("/userId/:id", updateUserBy_userId);// get http://localhost:5000/api/v1/users/userId/:id
router.delete("/userId/:id", deleteUserBy_userId);// get http://localhost:5000/api/v1/users/userId/:id

exports.userRouter = router;