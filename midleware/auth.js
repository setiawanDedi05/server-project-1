const { verifyToken } = require('../helper/jwt')
const { User } = require('../models')

const authentication = (req, res, next) => {
    if (!req.headers.token) return res.status(403).json({ message: "MISSING ACCESS TOKEN" })
    
    try {
        const verify = verifyToken(req.headers.token)
        req.id = verify.id
        req.username = verify.username
        req.role = verify.role

        User.findByPk(req.id)
            .then((result) => {
                if (!result) return res.status(403).json({ message: "Login Fail" })
                else next()
            }).catch((err) => {
                res.status(500).json({message: "Internal Server Error"})
            });

    } catch (error) {
        res.status(403).json({ message: "INVALID ACCESS TOKEN" })
    }
}

const authorizationAdmin = (req, res, next) => {
    if (req.role !== 'admin') return res.status(403).json({ "message": "Access Denied" })
    else next()
}



module.exports = {authentication, authorizationAdmin}