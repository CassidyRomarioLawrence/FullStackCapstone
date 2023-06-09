require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

function createToken(user) {
    return sign({
        userEmail: user.userEmail,
        userPassword: user.userPassword
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'  
    });
}

function verifyAToken(req, res, next) {
    try{
        const token = localStorage.getItem("Valid User") || "Please register";
        let valid = null;
        if(token !== "Please register") {
            valid = verify(token, process.env.SECRET_KEY);
            if(valid) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "Please register"})
            }
        }else {
            res.status(400).json({err: "Please register"})
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}
module.exports = { createToken, verifyAToken };
