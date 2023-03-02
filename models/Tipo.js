const criarTipoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        descricao_tipo: {
            type: dataTypes.STRING,
            allowNull: false
        },

    };

    const opcoes = {
        tableName: 'tipo_produtos',
        timestamps: false
    };

    const Tipo = sequelize.define('tipo_produtos', colunas, opcoes)

    return Tipo
};

module.exports = criarTipoModel;
