const user = require('../models/user')
const bcrypt = require('bcrypt')
async function registerUser(req, res) {
    const existingUser = await user.findOne({
        email: req.body.email,
    })
    if (existingUser) {
        // console.log('The email is already regsitered!')
        return res.json({
            msg: "The Email is already Registered",
            success: false
        })
    }
    else {
        try {

            let password = req.body.password;
            password = bcrypt.hashSync(password, 8);
            const userData = {
                name: req.body.name,
                email: req.body.email,
                password: password
            }
            const newUser = new user(userData);
            await newUser.save();
            console.log('The Register Details are saved Successfully!')
            res.status(201).json({
                msg: "The registration is done successfully!",
                success: true
            })
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                msg: "The registration Failed.",
                success: false
            })
        }
    }
}
async function loginUser(req,res) {
let email = req.body.email;
let password =  req.body.password;
const userExists = await user.findOne({
    email:req.body.email
 })
 if(userExists){

 }
}

module.exports = { registerUser, loginUser }