const categoriasModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        nome: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    };

    const opcoes = {
        tableName: "categorias",
        timestamps: false,
    };

    const categorias = sequelize.define("Autor", colunas, opcoes);

    return categorias;
};

module.exports = categoriasModel;
