
exports.up = function(knex, Promise) {
  return knex.schema.createTable("aircraft", table => {
   
    table.increments("id"); // "id" SERIAL
    table.string("flightNum"); // "title" VARCHAR(255)
    table.string("content"); // "content" TEXT
    table.integer("viewCount"); // "viewCount" INTEGER
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    // "createdAt" TIMESTAMP DEFAULT NOW()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("aircraft");
};
