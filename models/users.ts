import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('utilisateur', {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: { msg: concatRequiredMessage('Email') },
                notEmpty: { msg: concatRequiredMessage('Email') }
            }
        },
        mot_de_passe: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('mot de passe') },
                notEmpty: { msg: concatRequiredMessage('mot_de_passe') }
            }
        },
        telephone: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        prenom: {
            type: dataTypes.STRING
        },
        nom: {
            type: dataTypes.STRING
        },
        genre: {
            type: dataTypes.STRING
        },
        date_de_naissance: {
            type: dataTypes.DATEONLY
        }

    })
}
