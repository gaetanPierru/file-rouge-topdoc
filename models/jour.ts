
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('jour', {
        jour: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        heure_debut_journee: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        heure_fin_journee : {
            type: dataTypes.DATE,
            allowNull: false
        },
        duree_crenaux : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })
}
