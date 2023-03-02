const filmesModel = (sequelize, dataTypes) => {
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
        imagem: {
            type: dataTypes.STRING,
            allowNull: false
        },
        background: {
            type: dataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        categorias_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        classificacoes_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descricao: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    };

    const opcoes = {
        tableName: "filmes",
        timestamps: false
    };

    const filme = sequelize.define("Filme", colunas, opcoes);


    filme.associate = (models) => {
        filme.belongsTo(models.Classificacao, {
            as: "indicacao",
            foreignKey: "classificacoes_id",
        });
    }


    return filme;
};

module.exports = filmesModel;
