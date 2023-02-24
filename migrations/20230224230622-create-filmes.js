'use strict';

const { Sequelize, DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('filmes', { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,}, nome: { type: DataTypes.STRING, allowNull: false,
  }, imagem: { type: DataTypes.STRING, allowNull: false, }, background: { type: DataTypes.STRING, allowNull: false, }, valor: { type: DataTypes.STRING, allowNull: false,
  }, tipo: { type: DataTypes.STRING, allowNull: false, }, categorias_id: { type: DataTypes.INTEGER, references: {
    model: 'Categorias', key: 'id', }, onUpdate: 'CASCADE', onDelete: 'SET NULL',allowNull: false, }, classificacoes_id: { type: DataTypes.INTEGER, references: {
    model: 'Classificacoes', key: 'id', }, onUpdate: 'CASCADE', onDelete: 'SET NULL',allowNull: false, }
    
  });

    
  },

  async down (queryInterface, Sequelize) {
  
  await queryInterface.dropTable('filmes');
   
  }
};
