const express = require("express");

const validateToken = require("../middleware/validateTokenHandler");
const {     
    getAllContact,
    getSingleContact, 
    addContact, 
    UpdateContact, 
    detleteContact} = require("../Controller/contact.Controller");

const router = express.Router();

router.use(validateToken);
router.route("/").get(getAllContact).post(addContact);
router.route("/:id").get(getSingleContact).delete(detleteContact);
// router.route('/').post(addContact);
router.route("/:id").put(UpdateContact);

// router.route('/:id').delete(detleteContact);



module.exports = router;