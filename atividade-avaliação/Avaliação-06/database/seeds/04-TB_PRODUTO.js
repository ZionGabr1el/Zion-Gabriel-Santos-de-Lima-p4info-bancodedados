/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {id: 1, codigo: '1', descricao: "sanduiche", valor: 4.50},
    {id: 2, codigo: '2', descricao: "awa", valor: 313.00},
    {id: 3, codigo: '3', descricao: "maca", valor: 2.00},
  ]);
};
