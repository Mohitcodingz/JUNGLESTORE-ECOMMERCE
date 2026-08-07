const UserModel = require('../models/user');

const registerUser = async (req, res) => {
    const existingUser = await UserModel.findOne({
        email: req.body.email,
        name: req.body.email
    }
    )
    if (existingUser) {
        return res.json({
            success: false,
            message: "User Already Registered"
        })
    }
    else {

        try {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.status(200).json({
                success: true,
                message: 'User Registered Successfully'
            })
        }
        catch (err) {
            console.error(err);

            res.status(500).json({
                success: false,
                message: "User Registered Failed"
            });
        }
    }

}
module.exports = {
    registerUser
}