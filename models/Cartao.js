const cartaoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        numero_cartao: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nome_completo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        vencimento: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cvc: {
            type: dataTypes.STRING,
            allowNull: false
        },
        id_cadastrousuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
      
    };

    const opcoes = {
        tableName: "cartao",
        timestamps: false
    };

    const cartao = sequelize.define("Cartao", colunas, opcoes);


    cartao.associate = (models) => {
        cartao.belongsTo(models.CadastroUsuario, {
            as: "cadastroUsuario",
            foreignKey: "id_cadastroUsuario",
        });
    }


    return cartao;
};

module.exports = cartaoModel;
