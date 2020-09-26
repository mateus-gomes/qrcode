'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('codes',{
     id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement:true,
       allowNull:false,
     },
     code:{
       type: Sequelize.STRING(5),
       allowNull: true
     }
   });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('codes');
  }
};
