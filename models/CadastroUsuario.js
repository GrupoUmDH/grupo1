const cadastroUsuarioModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_usuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        nome_usuario: {
            type: dataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: dataTypes.STRING,
            allowNull: false
        },
        codigo_postal: {
            type: dataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: dataTypes.STRING,
            allowNull: false
        },
        endereco: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: dataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pais: {
            type: dataTypes.STRING,
            allowNull: false
        },

    };

    const opcoes = {
        tableName: "cadastro_usuario",
        timestamps: false
    };

    const cadastradoUser = sequelize.define("CadastroUsuario", colunas, opcoes);


    cadastradoUser.associate = (models) => {
        cadastradoUser.belongsTo(models.Usuario, {
            as: "user",
            foreignKey: "id_usuario",
        });
    }
    cadastradoUser.associate = (models) => {
        cadastradoUser.hasMany(models.Cartao, {
            as: "cartao",
            foreignKey: "id_cadastroUsuario",
        });
        cadastradoUser.hasMany(models.Historico, {
            as: "historico",
            foreignKey: "id_cadastroUsuario",
        });
    }

    return cadastradoUser;
};

module.exports = cadastroUsuarioModel;
