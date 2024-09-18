const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContactByID, updateContactById, deleteContactById } = require("../controller/contactController");
const { validateToken } = require('../middleware/validateJwtToken');

router.use(validateToken)
// To create a contact or get contacts
router.route('/').get(getContacts).post(createContact)
// To get a contact, put or delete or
router.route("/:id").get(getContactByID).put(updateContactById).delete(deleteContactById)

module.exports = router;