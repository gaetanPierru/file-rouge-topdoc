
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('localisation', {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
        numero_de_rue: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        address: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('address') },
                notEmpty: { msg: concatRequiredMessage('address') }
            }
        },
        code_postal: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        ville: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })
}
