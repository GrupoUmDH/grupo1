const cupomModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        cupom: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        valor: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: dataTypes.STRING,
        },

    };

    const opcoes = {
        tableName: 'cupom',
        timestamps: false
    };

    const cupom = sequelize.define('Cupom', colunas, opcoes)

    return cupom
};

module.exports = cupomModel;