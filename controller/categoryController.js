const { Category, Post } = require("../models")

class CategoryController {
    static getAll(req, res) {
        Category.findAll({
            include:[Post]
        })
            .then((result) => {
                res.status(201).json({"message":"success", result})
            }).catch((err) => {
                console.log(err);
            });
    }

    static getOne(req, res) {
        const {id} = req.params
        Category.findOne({
            where: {
                id
            }
        })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }

    static create(req, res) {
        const { name } = req.body
        Category.create({ name })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }

    static update(req, res) {
        const { id } = req.params
        const { name } = req.body
        Category.update({ name }, {
            where: {
                id
            }
        })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }
    
    static destroy(req, res) {
        const { id } = req.params
        Category.destroy({
            where: {
                id
            }
        })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }
}

module.exports = CategoryController