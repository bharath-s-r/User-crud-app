const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContactByID, updateContactById, deleteContactById } = require("../controller/contactController");
const { validateToken } = require('../middleware/validateJwtToken');

router.use(validateToken)
router.route('/').get(getContacts).post(createContact)
router.route("/:id").get(getContactByID).put(updateContactById).delete(deleteContactById)

module.exports = router;