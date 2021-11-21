const { comparePassword } = require('../helper/bcrypt');
const { generateToken } = require('../helper/jwt');
const { User, Comment, Post } = require('../models')
class UserController {
    static getAll(req, res) {
        User.findAll({
            include:[Comment, Post]
        })
            .then((result) => {
                res.status(201).json({"message":"success", result})
            }).catch((err) => {
                console.log(err);
            });
    }

    static login(req, res) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then((result) => {
                console.log(process.env.JWT);
                if (result) {
                    if (comparePassword(password, result.password)) {
                        const token = generateToken({ id: result.id, username: result.username, role: result.role })
                        console.log(token);
                        res.status(200).json({ token, result })
                    } else {
                        throw error
                    }
                }
            })
            .catch((err) => {
                res.status(400).json({"message":"wrong email/password", "error":err})
            });
    }

    static getOne(req, res) {
        const {id} = req.params
        User.findOne({
            where: {
                id
            }
        })
            .then((result) => {
                res.status(201).json({result})
            }).catch((err) => {
                res.status(404).json({message: "not found"})
            });
    }

    static create(req, res) {
        const {username, email, password, role, phoneNumber, address} = req.body
        User.create({
            username,
            email,
            password,
            role,
            phoneNumber,
            address
        })
            .then((result) => {
                console.log(result);
                res.status(200).json({result})
            }).catch((err) => {
                console.log(err.stack);
                res.status(400).json({err})
            });
    }

    static update(req, res) {
        const {id} = req.params
        const { username, email, role, phoneNumber, address } = req.body
        User.update({ username, email, role, phoneNumber, address }, {
            where: {
                id
            }
        })
            .then(result=>{
                res.status(200).json({result})
            })
            .catch(err => {
                res.status(400).json({err})
            })
    }

    static destroy(req, res) {
        const { id } = req.params
        User.destroy({
            where: {
                id
            }
        })
            .then(() => {
                res.status(200).json({message:"success delete data"})
            })
            .catch(err => {
                res.status(400).json({message:"error", err})
            })
    }
}

module.exports = UserController