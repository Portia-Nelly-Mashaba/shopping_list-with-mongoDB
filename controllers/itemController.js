import Item from "../models/item.js"

const creatItem  = async (req, res) => {
    try {
        const newItem = await Item.create(req.body)
        res.status(201).json(newItem)
    } catch (error) {
        res.status(500).json({error:"An Error occured while creating the item"})
    }
}

const getItems = async (req, res) => {
    try{
        const {page = 1, limit =5 } = req.query;
        const skip = (page - 1) * limit;
        const items = await Item.find().skip(skip).limit(limit)

        const totalItems = await Item.countDocuments()

        res.status(200).json({items, totalItems, page, limit})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "An Error occured while fecthing the item"})
    }
}

export default {
    creatItem,
    getItems
}