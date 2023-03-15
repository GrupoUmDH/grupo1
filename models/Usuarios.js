const userModel = (sequelize, dataTypes) => {

    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        nome_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        senha: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        tipo_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    };

    const opcoes = {
        tableName: "usuarios",
        timestamps: false,
    };

    const usuario = sequelize.define("Usuario", colunas, opcoes);

    return usuario;

};

module.exports = userModel;