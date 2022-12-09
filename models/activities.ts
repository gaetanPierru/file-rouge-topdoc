
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('activite', {
        fonction: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description : {
            type: dataTypes.STRING
        },
        type : {
            type: dataTypes.STRING
        },
        estActive: {
            type: dataTypes.BOOLEAN
        }
    })
}
