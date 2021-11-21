const {Post, Category, View, Comment, User, Tag, sequelize} = require('../models')
class PostController {
    static getAll(req, res) {
        Post.findAll({
            include:[Category, View, Comment, User, Tag]
        })
            .then((result) => {
                res.status(201).json({"message": "success", result})
            }).catch((err) => {
                console.log(err);
            });
    }

    static getOne(req, res) {
        const {id} = req.params
        Post.findOne({
            where: {
                id
            },
            include:[User, Category, View, Comment, Tag]
        })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }

    static getByCategory(req, res) {
        const { id } = req.params
        Post.findAll({
            where: {
                categoryId:id
            }
        })
            .then((result) => {
                res.status(201).json({ "message": "success", result })
            }).catch((err) => {
                console.log(err);
            });
    }

    static async create(req, res) {
        const { title, slug, authorId, content, imgUrl, categoryId, tag } = req.body
        console.log(req.body, "ini body");
        const t = await sequelize.transaction()
        try {
            const result = await Post.create({ title, categoryId, authorId, slug, content, imgUrl }, {transaction:t})
            console.log(result, "ini result");
            await Tag.create({ postId: result.id, name: tag }, { transaction: t })
            await t.commit()
            console.log("success");
            res.status(200).json({message:"success"})
        } catch (error) {
            await t.rollback()
            console.log("fail");
            res.status(400).json({message:"fail"})
        }
        
    }

    static async update(req, res) {
        const {id} = req.params
        const { title, slug, authorId, content, imgUrl, categoryId, tag } = req.body
        const t = await sequelize.transaction()
        console.log(req.body, "ini body");
        console.log(id, "ini params");
        try {
            await Post.update({ title, categoryId, authorId, slug, content, imgUrl },
                {
                    where: {
                        id
                    },
                    transaction: t
                })
            await Tag.update({ name: tag },
                {
                    where: {
                        postId:id
                    },
                    transaction: t
                })
            await t.commit()
            console.log("success");
            res.status(200).json({ message: "success" })
        } catch (error) {
            await t.rollback()
            console.log("fail");
            res.status(400).json({ message: "fail" })
        }
    }

    static destroy(req, res) {
        const { id } = req.params
        Post.destroy({
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

module.exports = PostController