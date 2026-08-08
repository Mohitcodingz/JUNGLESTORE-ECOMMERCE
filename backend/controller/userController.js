const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
async function loginUser(req, res) {
    let email = req.body.email;
    let loginPassword = req.body.password;
    const userExists = await user.findOne({
        email: req.body.email
    })
    if (!userExists) {
        res.json({
            msg: "This user Doesn't exists",
            success: false
        }
        )
    }
    else {
        let isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            userExists.password
        )
        if (!isPasswordCorrect) {
            return res.json({
                msg: "The password is incorrect!",
                success: false
            })
        }
        else {



            const token = jwt.sign({ userId: userExists._id }, process.env.JWT_SECRET)
            // TO CREATE A TOKEN USIG JSWT.SIGN WE REQUIRE A USER_ID IN THE MONGODB + MY SCEREETKEY
            res.json({
                msg: "Congratulation Your password is correct!",
                success: true,
                token:token
            })
        }
    }
}

module.exports = { registerUser, loginUser }    