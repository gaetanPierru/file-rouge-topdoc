
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('rendez_vous', {
        date_rendez_vous: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        duree_rendez_vous: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })
}
