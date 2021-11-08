const webtoken = require('jsonwebtoken');
const users = require('../models/user');
const tokenSecret = process.env.TOKEN_SECRET;

module.exports.signToken = (id)=>{
    return webtoken.sign(
        {
            id
        },
        tokenSecret,
        {
            expiresIn:100
        }
    );
}

module.exports.checkToken = async (req,res,next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.sendStatus(403);        
    }
    webtoken.verify(token,tokenSecret,async (err,decoded)=>{
        if (decoded) {
            const {id}= decoded;
            let existe = await users.exists(id);
            if (existe !== 0) {
                req.user = id;
                next();
            }
            else{
                res.status(403).json({success:0});
            }
        }
        else{
            res.status(403).json({success:0})
        }
    })
}