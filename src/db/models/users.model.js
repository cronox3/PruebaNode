const { Model, DataTypes, Sequelize } = require('sequelize');

const USERS_TABLE = 'users';

class Users extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'Users',
            timestamps: true
        }
    }
} 

const UsersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    first_name: {
        allowNull: true,
        type: DataTypes.STRING,
        field:'first_name'
    },
    last_name: {
        allowNull: true,
        type: DataTypes.STRING,
        field:'last_name'
    },
    date_birth: {
        allowNull: true,
        type: DataTypes.DATE,
        field:'date_birth'
    },
    address:{ 
        allowNull:true,
        type: DataTypes.STRING,
        field: 'address'
    },
    token:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'token'
    },
    password:{ 
        allowNull:true,
        type: DataTypes.STRING,
        field: 'password'
    },
    mobile_phone:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'mobile_phone'
    },
    email:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'email'
    }
}
  
module.exports = { Users, UsersSchema };