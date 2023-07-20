/**
 * Define a classe modelo Cliente a ser persistida.
 */

// Import das bibliotecas
const {Sequelize, Model, DataTypes } = require("sequelize");

// Import das configurações do banco
const sequelize = require("./dbconfig");

// Define o modelo para Cliente
class Cliente extends Model {}

Cliente.init({
    clienteId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
    }, 
    { sequelize, 
    modelName: 'cliente' 
    }
);

// Sincroniza o modelo com o banco de dados
sequelize.sync();

// Exporta o modelo
module.exports = Cliente;