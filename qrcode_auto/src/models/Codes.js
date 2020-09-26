const sequelize = require('sequelize');
const {Model, DataTypes} = require('sequelize');

class Code extends Model{
    static init(sequelize){
        super.init({
            code: DataTypes.STRING(5)
        },{
            sequelize
        })
    }
}

module.exports = Code;