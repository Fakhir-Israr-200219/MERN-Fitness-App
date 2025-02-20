const asyncHandler = require("express-async-handler");
const contactModel = require("../models/contact.Model")
const { ObjectId } = require('mongodb');
//@dec get all contact
//@route get /book
//@access Private
const getAllContact = asyncHandler(async (req, res) => {
    const connect = await contactModel.find({user_id : req.user.id});
    res.status(200).json(connect);
})

//@dec get songle contact
//@route get /book/id
//@access Private
const getSingleContact =asyncHandler(async (req, res) => {
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact);
})

//@dec get add contact
//@route Post /book
//@access Private
const addContact =asyncHandler( async (req, res) => {
    console.log("the request Body is ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all feild are menditory");
    }
    const contact = await contactModel.create({
        name,
        email,
        phone,
        user_id :req.user.id
    })
    res.status(201).json(contact);
})

//@dec get Put contact
//@route Put /book/id
//@access Private
const UpdateContact = asyncHandler(async (req, res) => {
    const body = req.body;
    const id = new ObjectId(req.params.id);
    const option = {new :true}
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user dont have permission to update the contact")
    }
    const updateContact = await contactModel.findByIdAndUpdate(id,body,option);
    res.status(200).json(updateContact);
})

//@dec get Delete contact
//@route delete /book/id
//@access Private
const detleteContact =asyncHandler( async (req, res) => {
    const contact = await contactModel.findById(new ObjectId(req.params.id));
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    // await contactModel.deleteById(new ObjectId(req.params.id))
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user dont have permission to update the contact")
    }
    await contactModel.deleteOne(new ObjectId(req.params.id))
    

    res.status(200).json(contact);
})

module.exports = {
    getAllContact,
    getSingleContact,
    addContact,
    UpdateContact,
    detleteContact
}

