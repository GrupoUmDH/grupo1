const criarCategoriaModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nome_categoria: {
            type: dataTypes.STRING,
            allowNull: false
        },

    };

    const opcoes = {
        tableName: 'categorias',
        timestamps: false
    };

    const Produto = sequelize.define('Categorias', colunas, opcoes)

    return Produto
};

module.exports = criarCategoriaModel;
