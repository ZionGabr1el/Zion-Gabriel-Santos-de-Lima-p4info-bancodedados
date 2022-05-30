/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('TB_CLIENTE').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('TB_CLIENTE').insert([
          {id: 1, codigo: '000', cnpjcpf: '000.000.000-00', nome: "Felipe", TipoCliente: "Pessoa_Fisica"},
          {id: 2, codigo: '111', cnpjcpf: '111.111.111-11', nome: "Taveira", TipoCliente: "Pessoa_Fisica"},
          {id: 3, codigo: '222', cnpjcpf: '222.222.222-22', nome: "Zion", TipoCliente: "Pessoa_Fisica"},
        ]);
      });
  };
