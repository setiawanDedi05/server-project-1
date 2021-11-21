const {Comment, User} = require('../models')
class CommentController {

    static getAll(req, res) {
        Comment.findAll({
            where: {
                postId:req.params.id
            },
            include: [User]
        })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }
    static create(req, res) {
        console.log(req.body);
        Comment.create(req.body)
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err.stack);
            });
    }
}

module.exports = CommentController