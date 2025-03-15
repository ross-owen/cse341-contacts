const mongo = require('../data/index');
const {ObjectId} = require("mongodb");

const list = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'List Contacts'
    // #swagger.description = 'List all the contacts in the database'
    // #swaager.end
    const result = await mongo.get().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const create = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Create Contact'
    // #swagger.description = 'Create a new contact and add it to the database'
    // #swaager.end
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const result = await mongo.get().db().collection('contacts').insertOne(contact);
    res.setHeader('Content-Type', 'application/json');
    if (result.acknowledged) {
        res.status(201).json(result.insertedId);
    } else {
        res.status(500).send();
    }
}

const getById = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Find Contact'
    // #swagger.description = 'Find a contact by the given identifier'
    // #swagger.responses[200] = { description: 'Successful retrieval' }
    // #swagger.responses[404] = { description: 'Resource not found' }
    // #swaager.end
    const contactId = new ObjectId(req.params.id);
    const result = await mongo.get().db().collection('contacts').findOne({ _id: contactId });
    if (result) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } else {
        res.status(404).send();
    }
};

const updateById = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Update Contact'
    // #swagger.description = 'Update the contact data for a specific contact (by identifier)'
    // #swaager.end
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const result = await mongo.get().db().collection('contacts').replaceOne({ _id: contactId }, contact);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).send();
    }
}

const deleteById = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Delete Contact'
    // #swagger.description = 'Remove a contact from the database (by identifier)'
    // #swaager.end
    const contactId = new ObjectId(req.params.id);
    const result = await mongo.get().db().collection('contacts').deleteOne({ _id: contactId });
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).send();
    }
}

module.exports = {
    create, list, getById, updateById, deleteById
};