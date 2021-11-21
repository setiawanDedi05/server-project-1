const jwt = require('jsonwebtoken')
console.log(process.env.JWT);
function generateToken(data) {
    return jwt.sign(data, process.env.JWT)
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT)
}

module.exports = {generateToken, verifyToken}