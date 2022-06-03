var express = require("express");
var router = express.Router();
const Users = require("./user");


router.get("/", async (req, res) => {
    try {
        res.send("HELLO USERS LMAO");
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/allusers", async (req, res) => {
    try {
        const users = await Users.find({});
        res.send(users);
    } catch (err) {
        console.error(err.message);
    }
});

router.post('/adduser', async (req,res)=>{
    try{
        const {name,email}=req.body;
        const newUser = new Users();
        newUser.name = name;
        newUser.email = email;
        newUser.save();
        res.send(newUser);
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router;