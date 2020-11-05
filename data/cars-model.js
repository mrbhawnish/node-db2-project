const db = require('./config.js');

module.exports = {
  getAll(){
   return db("cars")
  },
  getById(id){
    return db("cars").where({id})
  },
  create(car) {
      return db("cars").insert(car)
  }

};