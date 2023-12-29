const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContactByID, updateContactById, deletContactById } = require("../controller/contactController")

router.route('/').get(getContacts).post(createContact)

router.route("/:id").get(getContactByID).put(updateContactById).delete(deletContactById)

module.exports = router;