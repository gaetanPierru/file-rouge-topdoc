
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('bannis', {
        bannis_email: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('email') },
                notEmpty: { msg: concatRequiredMessage('email') }
            }
        },
        raison : {
            type: dataTypes.STRING
        }
    })
}
