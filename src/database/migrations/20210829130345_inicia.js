exports.up = function (knex) {
    return knex.schema
      .createTable('productos', (prodTable) => {
        prodTable.increments();
        prodTable.string('title').notNullable();
        prodTable.decimal('price');
        prodTable.string('thumbnail');
      })  
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('productos')
  };