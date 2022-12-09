
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize) => {
    return sequelize.define('ban_user', {
        temps: {
            type: DataTypes.INTEGER
        }
    })
}
