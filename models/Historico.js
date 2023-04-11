const historicoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        id_usuario: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        itens: {
            type: dataTypes.JSON,
            allowNull: false,
        },

        data: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        valor: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        metodo_pay: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        id_cartao: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
    };

    const opcoes = {
        tableName: "historico",
        timestamps: false,
    };

    const Tipo = sequelize.define("Historico", colunas, opcoes);

    return Tipo;
};

module.exports = historicoModel;
