// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Test2 = require('../models/test2Schema');

// CRUD operations for Test2
// Create Controller 
const createTest2 = async (req, res) => { 
    const { Field1 } = req.body;
    try {
        const test2 = await Test2.create({ Field1 }) 
        await test2.save();
        res.status(201).json(test2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateTest2 = async (req, res) => { 
    const _id=req.params.id;
    const { Field1 } = req.body;
    try {
        const test2 = await Test2.findByIdAndUpdate( _id, { Field1 },{new:true}) 
        if (!test2) {
            return res.status(404).send('test2 not found');
        }
        await test2.save();
        res.status(201).json(test2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteTest2 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const test2 = await Test2.findById(_id)
        if (!test2) {
            return res.status(404).send('test2 not found');
        }
        await Test2.deleteOne({_id: _id})
        await test2.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getTest2 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const test2 = await Test2.findById(_id)
        if (!test2) {
            return res.status(404).send('test2 not found');
        }
        res.status(201).json(test2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllTest2 = async (req, res) => { 
    try {
        const test2 = await Test2.find({})
        if (!test2) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(test2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createTest2,
    updateTest2,
    deleteTest2,
    getTest2,
    getAllTest2
}