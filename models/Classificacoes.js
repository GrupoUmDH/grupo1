const classificacaoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        },
        info: {
            type: dataTypes.STRING,
            allowNull: false
        },
        imagem: {
            type: dataTypes.STRING,
            allowNull: false
        },
    };

    const opcoes = {
        tableName: "classificacoes",
        timestamps: false
    };

    const Classificacao = sequelize.define("Classificacao", colunas, opcoes);

    return Classificacao;
};

module.exports = classificacaoModel;
