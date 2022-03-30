const express = require('express')
const api_router = express.Router()

module.exports = (app) => {
    // --------------------------------controller Declartion-----------------
    const addstudent = require('../controllers/api/studentController')
    // unorthorised router start here 
    //app.use('/api', api_router)
    //test controller
   
    app.post('/add',addstudent.add);
    app.get('/display/:id',addstudent.display)
    app.get('/displayall',addstudent.displayall)
    app.delete('/delete/:id',addstudent.delete)
    app.put('/update/:id',addstudent.update)
    

}