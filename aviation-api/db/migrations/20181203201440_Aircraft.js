
exports.up = function(knex, Promise) {
  return knex.schema.createTable("aircraft", table => {
   
    table.increments('id')
    table.json('data').nullable()
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("aircraft");
};
