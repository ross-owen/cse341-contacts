const db = require('../data/index');
const {ObjectId} = require("mongodb");
const id = require('mongodb').ObjectId;

const list = async (req, res) => {
    const result = await db.get().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getById = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await db.get().db().collection('contacts').findOne({ _id: contactId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = {
    getById, list
};