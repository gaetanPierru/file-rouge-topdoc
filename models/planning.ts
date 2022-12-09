
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('planning', {
        nom_planning: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('nom') },
                notEmpty: { msg: concatRequiredMessage('nom') }
            }
        },
        date_debut_planning : {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        duree_validite_calendrier : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })
}
