'use strict';

const { Sequelize, DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('classificacoes', { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
  }, nome: { type: DataTypes.STRING, allowNull: false, }, info: { type: DataTypes.STRING, allowNull: false, }, imagem: { type: DataTypes.STRING, allowNull: false,} 
    
  });

    
  },

  async down (queryInterface, Sequelize) {
  
  await queryInterface.dropTable('classificacoes');
   
  }
};
