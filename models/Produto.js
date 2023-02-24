const criarProdutoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nome_produto: {
            type: dataTypes.STRING,
            allowNull: false
        },

        descricao_produto: {
            type: dataTypes.STRING,
            allowNull: false
        },

        classificacao_produto: {
            type: dataTypes.STRING,
            allowNull: false
        },

        valor_produto: {
            type: dataTypes.STRING,
            allowNull: false
        },

        imagem: {
            type: dataTypes.STRING,
            allowNull: false
        },

        background: {
            type: dataTypes.STRING,
            allowNull: false
        },
    };

    const opcoes = {
        tableName: 'produtos',
        timestamps: false
    };

    const Produto = sequelize.define('Produto', colunas, opcoes)

    return Produto
};

module.exports = criarProdutoModel;



