const express = require('express');
const db = require("./data/cars-model.js")
const router = express.Router();

router.get('/', async(req,res) => {
   const cars = await db.getAll()
   res.json(cars)
})

router.get('/:id', async(req,res) => {
    const car = await db.getById(req.params.id)
    if(car.length){
        res.json(car)
    } else {
    res.status(404).json({ meessage: "user with the id is not found."})
    }


 })

router.post('/', async(req,res) => {
    const payload = {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage
    }
    try{

    if(!payload.vin || !payload.make || !payload.model || !payload.mileage){
    res.status(400).json( {message: "body is incomplete"} )
    }
    const newCar = await db.create(payload)
    res.json(newCar)
    } catch(error){
    res.json({message: error.message})
    }
 })



module.exports = router
