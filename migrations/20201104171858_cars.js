
exports.up = async function(knex) {
    // the change we want to make to our schema
    //return a created schema/blueprint
    await knex.schema.createTable("cars", tbl =>{
        // creates a primary key called id
        tbl.increments();
        tbl.varchar("vin").unique().notNullable();
        tbl.text("make", 128).notNullable();
        tbl.text("model").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.text("tramission")
        tbl.text("status")
    })
};  

exports.down = function(knex) {
   // drop the entire table or undo the change
   return knex.schema.dropTableIfExists('cars')
};
