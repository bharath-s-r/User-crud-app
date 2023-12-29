//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get contacts" })
};

//@desc create contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Created contact" })
};

//@desc Get contact by id
//@route GET /api/contacts
//@access public
const getContactByID = (req, res) => {
    res.status(200).json({ message: `Get contact by id: ${req.params.id}` })
};

//@desc update contact by Id
//@route PUT /api/contacts
//@access public
const updateContactById = (req, res) => {
    res.status(200).json({ message: `Update by id: ${req.params.id}` })
};

//@desc Delete contact by ID
//@route DELETE /api/contacts
//@access public
const deletContactById = (req, res) => {
    res.status(200).json({ message: `Delete contact by id: ${req.params.id}` })
};

module.exports = { getContacts, createContact, getContactByID, updateContactById, deletContactById }