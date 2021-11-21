const {View, User} = require('../models')
class ViewController {
    static getAll(req, res) {
        View.findAll({
            include:[User]
        })
            .then((result) => {
                res.status(201).json({"message": "success", result})
            }).catch((err) => {
                console.log(err);
            });
    }

    static create(req, res) {
        const {postId, ip_address} = req.body
        View.create({ postId, ip_address })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }
}

module.exports = ViewController