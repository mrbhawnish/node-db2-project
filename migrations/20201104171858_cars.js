
exports.up = async function(knex) {
    // the change we want to make to our schema
    //return a created schema/blueprint
    await knex.schema.createTable("cars", tbl =>{
        // creates a primary key called id
        tbl.increments();
        // creates a column for a VIN number
        tbl.varchar("VIN").unique().notNullable();
        tbl.text("Make", 128).notNullable();
        tbl.integer("Model").notNullable();
        tbl.integer("Mileage").notNullable();
        tbl.text("tramission")
        tbl.text("status")
    })
};  

exports.down = function(knex) {
   // drop the entire table or undo the change
   return knex.schema.dropTableIfExists('cars')
};
