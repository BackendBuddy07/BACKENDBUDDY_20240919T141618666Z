// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const TestSchema = require('../models/testschemaSchema');

// CRUD operations for TestSchema
// Create Controller 
const createTestSchema = async (req, res) => { 
    const { Field1, Field2 } = req.body;
    try {
        const testschema = await TestSchema.create({ Field1, Field2 }) 
        await testschema.save();
        res.status(201).json(testschema);
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
const updateTestSchema = async (req, res) => { 
    const _id=req.params.id;
    const { Field1, Field2 } = req.body;
    try {
        const testschema = await TestSchema.findByIdAndUpdate( _id, { Field1, Field2 },{new:true}) 
        if (!testschema) {
            return res.status(404).send('testschema not found');
        }
        await testschema.save();
        res.status(201).json(testschema);
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
const deleteTestSchema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const testschema = await TestSchema.findById(_id)
        if (!testschema) {
            return res.status(404).send('testschema not found');
        }
        await TestSchema.deleteOne({_id: _id})
        await testschema.save();
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
const getTestSchema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const testschema = await TestSchema.findById(_id)
        if (!testschema) {
            return res.status(404).send('testschema not found');
        }
        res.status(201).json(testschema);
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
const getAllTestSchema = async (req, res) => { 
    try {
        const testschema = await TestSchema.find({})
        if (!testschema) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(testschema);
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
    createTestSchema,
    updateTestSchema,
    deleteTestSchema,
    getTestSchema,
    getAllTestSchema
}