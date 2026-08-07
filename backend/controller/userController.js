const registerUser = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "This function is working properly"
    })
}
module.exports = {
    registerUser
}