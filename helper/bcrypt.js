const bcrypt = require('bcrypt')

function hashing(password) {
    return bcrypt.hashSync(password, 8)
}

function comparePassword(password, passwordDb) {
    return bcrypt.compareSync(password, passwordDb)
}

module.exports = {hashing, comparePassword}