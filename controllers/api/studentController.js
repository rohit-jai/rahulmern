//const express = require('express')
const StudentModel = require('../../model/student')
exports.add = async (req, res) => {
    const student = new StudentModel(req.body)
    try {
        await student.save()
        res.status(201).send(student)
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.display = async (req,res)=>{
    const student  = await StudentModel.findById(req.params.id)
    try{
        res.status(200).send(student)
    }catch(err)
    {
        res.status(500).send(err)
    }
}

exports.displayall = async(req,res)=>{
    const student  = await StudentModel.find({})
    try{
        res.status(200).send(student)
    }
    catch(err)
    {
        res.status(500).send(err)
    }

}

exports.delete = async (req,res)=>{
    const student =  await StudentModel.findByIdAndDelete(req.params.id)

    try{
        if(student>0)
        {
            res.status(200).send('id is deleted  ')
        }
        else
        {
            res.send('id is not found')
        }
    }
    catch(err)
    {
        res.status(500).send(err)
    }
}


exports.update = async(req,res)=>{
    const student =  await StudentModel.findByIdAndUpdate(req.params.id,req.body)
    if(student)
    {
        res.status(200).send(student)
    }
    else
    {
        res.status(500).send('Data is not updated ')
    }

    // StudentModel.findByIdAndUpdate(req.params.id,req.body,(err,docs)=>{
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("Updated User : ", docs);
    //     }
    // })


   }
