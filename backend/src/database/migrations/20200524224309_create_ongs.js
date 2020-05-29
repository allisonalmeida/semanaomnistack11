exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/**
 * Comando para cria a migration:
 * 
 * npx knex migrate:make nome-tabela
 * 
 * Comando para cria a tabela:
 * 
 * npx knex migration:latest
 * 
 * Comando desfazer a ultima migration:
 * 
 * npx knex migrate:rollback
 */