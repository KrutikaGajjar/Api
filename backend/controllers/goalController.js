const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Bank = require('../models/goalModel')

const getGoals = asyncHandler(async (req,res) => {
    const banks = await Bank.find()
    res.status(200).json(banks)
    
})

const setGoal = asyncHandler(async (req,res) => {
    // const {email,pwd} = req.body 
    if(!req.body.pwd, !req.body.email){
        res.status(400)
        throw new Error('please add a post text')
    }
    
// const date = new Date;
// let hours = date.getHours();
// let status = (hours < 12)? "Morning" :
//              ((hours <= 18 && hours >= 12 ) ? "Afternoon" : "Night");
// res.send(status);
    
    const bank = await Bank.create({
        pwd: req.body.pwd,
        email: req.body.email,
        // status: req.body.status,
    })
    res.status(200).json(bank)
})

const updateGoal =asyncHandler(async (req,res) => {
    const bank = await Bank.findById(req.params.id)
    if(!bank){
        res.status(400)
        throw new Error('bank not found')
    }
    const updateGoal = await Bank.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json(updateGoal)
})

const deleteGoal =asyncHandler(async (req,res) => {
    const bank = await Bank.findById(req.params.id)
    if(!bank){
        res.status(400)
        throw new Error('bank not found')
    }
    await bank.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}