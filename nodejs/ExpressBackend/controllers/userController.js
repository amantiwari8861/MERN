let greet = (req, res) => {
    res.send("users working!");
}

let getAllUsers=async (req,res) => {
    res.send("get All users");
}
let getUserById=async (req,res) => {
    res.send("get user "+req.params.id);
}
let addUser=async (req,res) => {
    console.log(req.body);
    
    res.send("add user ");
}
let updateUser=async (req,res) => {
    res.send("update user "+req.params.id+" with "+JSON.stringify(req.body));
}
let deleteUser=async (req,res) => {
    res.send("deleting user "+req.params.id);
}
// exports.greet = greet;
module.exports={addUser,getAllUsers,getUserById,updateUser,deleteUser,greet}