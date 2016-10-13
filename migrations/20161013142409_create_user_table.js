'use strict'

module.exports.up = (knex, Promise) => {
 return knex.schema.createTable('Users', table => {
     //creates an incrementing id as primary key
     table.increments()
     //create columns
     table.string('email').unique()
     table.string('password')
 })
};

module.exports.down = (knex, Promise) => {
 return knex.schema.dropTable('Users')
};
