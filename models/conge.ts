
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('conge', {
        date_debut: {
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        date_fin : {
            type: dataTypes.DATEONLY,
            allowNull: false
        }
    })
}
