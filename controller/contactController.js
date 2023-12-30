const Contact = require("../models/contactsModel");
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    if (!contacts) {
        res.status(400)
        throw new Error("Backend didn't fetch any data")
    }
    res.status(200).json(contacts)
});

//@desc create contact
//@route POST /contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    const { username, email, phone } = req.body;
    if (!username || !email || !phone) {
        res.status(400);
        throw new Error("Please provide all fields")
    }
    const createdContact = await Contact.create({
        user_id: req.user.id,
        username,
        email,
        phone
    })
    if (!createdContact) {
        res.status(400)
        throw new Error("Contact details were not pushed")
    }
    res.status(201).json(createdContact)
});

//@desc Get contact by id
//@route GET /contacts/id
//@access private
const getContactByID = asyncHandler(async (req, res) => {
    const contactById = await Contact.findById(req.params.id);
    if (!contactById) {
        res.status(404)
        throw new Error("Contact not found")
    }
    else if (contactById.user_id !== req.user.id) {
        res.status(401)
        throw new Error("You are not authorized to view this contact")
    }
    res.status(200).json(contactById)
});


//@desc update contact by Id
//@route PUT /contacts/id
//@access private
const updateContactById = asyncHandler(async (req, res) => {
    const { username, email, phone } = req.body;
    if (!username || !email || !phone) {
        res.status(400);
        throw new Error("Please provide all fields")
    }
    const contactById = await Contact.findById(req.params.id);
    if (!contactById) {
        res.status(404)
        throw new Error("Contact not found")
    }
    else if (contactById.user_id === req.user.id) {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            { user_id: req.user.id, ...req.body },
            { new: true }
        )
        if (!updatedContact) {
            res.status(400)
            throw new Error("Contact was not updated")
        }
        res.status(200).json(updatedContact)
    }
    else {
        res.status(401)
        throw new Error("You are not authorized to update this contact")
    }

});

//@desc Delete contact by ID
//@route DELETE /contacts/id
//@access private
const deleteContactById = asyncHandler(async (req, res) => {
    const contactById = await Contact.findById(req.params.id);
    if (!contactById) {
        res.status(404)
        throw new Error("Contact not found")
    }
    else if (contactById.user_id === req.user.id) {
        const deletedContact = await Contact.deleteOne({ _id: req.params.id })
        if (!deletedContact) {
            res.status(400)
            throw new Error("Contact was not deleted")
        }
        res.status(200).json(deletedContact)
    }
    else {
        res.status(401)
        throw new Error("You are not authorized to delete this contact")
    }
});

module.exports = { getContacts, createContact, getContactByID, updateContactById, deleteContactById }