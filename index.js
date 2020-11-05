const express = require("express");
const carsRouter = require('./carsRouter.js')
const server = express();
const PORT = process.env.PORT || 5000

server.use(express.json());
server.use("/api/cars", carsRouter)


server.listen(PORT, () => {
    console.log("API IS RUNNING ON " + PORT)
})
