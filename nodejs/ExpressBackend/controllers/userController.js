const userModel = require("../entities/UserModel");

// Greet Controller
let greet = (req, res) => {
    res.send("Users API is working!");
};

// Get All Users
let getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find(); // Fetch all users from the database
        res.status(200).json(users); // Return users as JSON
    } catch (err) {
        res.status(500).send("Error fetching users: " + err.message);
    }
};

// Get User By ID
let getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id); // Fetch user by ID
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).send("Error fetching user: " + err.message);
    }
};

// Add a New User
let addUser = async (req, res) => {
    console.log("adding");

    try {
        const newUser = new userModel(req.body); // Create a new user document from request body
        await newUser.save(); // Save the user to the database
        res.status(201).json(newUser); // Respond with the created user
    } catch (err) {
        res.status(400).send("Error adding user: " + err.message);
    }
};

// Update an Existing User
let updateUserBy_Id = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Options to return updated user and run schema validations
        );
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(400).send("Error updating user: " + err.message);
    }
};

// Delete a User
let deleteUserBy_Id = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id); // Delete user by ID
        if (deletedUser) {
            res.status(200).send("User deleted successfully");
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
};

let addAll = async (req, res) => {
    try {
        let insertedUsers = await userModel.insertMany(req.body);
        res.status(201).json(insertedUsers);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

let updateUserBy_userId = async (req, res) => {
    console.log("updating user having id " + req.params.id + " with data :" + JSON.stringify(req.body));
    try {
        const updatedUser = await userModel.findOneAndUpdate({ "userId": req.params.id }, req.body, { new: true });
        if (!updatedUser) return res.status(404).send("User not found");
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
let deleteUserBy_userId = async (req, res) => {
    console.log("deleting user having id " + req.params.id);

    try {
        const deletedUser = await userModel.findOneAndDelete({ "userId": req.params.id })
        if (!deletedUser) return res.status(404).send("User not found");
        res.json(deletedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const validateUserCredentials = async (req, res) => {
    try {
        const user = await userModel.validateUser(req.body.email, req.body.password);
        res.status(200).json({ "msg": "User validated successfully", "data": user });
    } catch (error) {
        res.status(404).json({ "msg": error.message });
    }
};

// Export Controllers
module.exports = { addUser, addAll, getAllUsers, getUserById, updateUserBy_Id, deleteUserBy_Id, greet, updateUserBy_userId, deleteUserBy_userId, validateUserCredentials };
