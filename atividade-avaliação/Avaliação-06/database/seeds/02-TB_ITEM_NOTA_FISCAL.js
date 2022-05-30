/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 1, sequencial: '111', quantidade: "5", valor: "9.00", produto_id: "1", notaFiscal_id: "10", TipoCliente: "Pessoa_Fisica"},
    {id: 2, sequencial: '222', quantidade: "7", valor: "27.50", produto_id: "2", notaFiscal_id: "20", TipoCliente: "Pessoa_Juridica"},
    {id: 3, sequencial: '333', quantidade: "2", valor: "2.00", produto_id: "3", notaFiscal_id: "30", TipoCliente: "Pessoa_Fisica"},
  ]);
};
