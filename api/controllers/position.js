const Position = require('../models/Position')
const Category = require('../models/Category')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const positions = await Position.find({user: req.user.id})
        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.createElem = async function (req, res) {
    try {
        const category = await Category.find({id: req.params.id})
        const {name, price, id, img, description} = category[0]
        const cart = new Position({
            name,
            price,
            id,
            img,
            description,
            user: req.user.id,
            all: req.body.all,
        })
        const {all} =  category[0]
        const updated = {
            all: all - req.body.all,
        }
        await Category.findOneAndUpdate(
            {id: req.body.id},
            {$set: updated},
            {new: true}
        )
        await cart.save();
        res.status(201).json(cart)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Position.deleteOne({
            id: req.params.id,
            user:req.user.id
        })
        const category = await Category.find({id: req.params.id})
        const {all} =  category[0]
        const updated = {
            all: all + req.body.all,
        }
        await Category.findOneAndUpdate(
            {id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
}
