const { Tag } = require('../models')
class TagsController {

    static getAll(req, res) {
        Tag.findAll()
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }

    static getOne(req, res) {
        Tag.findOne({
            where: {
                postId:req.params.id
        }})
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }

    static create(req, res) {
        const { name, postId } = req.body
        Tag.create({ postId, name })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }
}

module.exports = TagsController