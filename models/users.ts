import { DataTypes, Model, Sequelize } from "sequelize"
import { sequelize } from "../database/connect";
export class User extends Model{
  email!: string;
  telephone!: string;
  mot_de_passe!: string;
  localisationId!: number;
  prenom!: string;
  nom!: string;
  genre!: string;
  date_de_naissance!: Date;
  
} 

    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    User.init({

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: { msg: concatRequiredMessage('Email') },
                notEmpty: { msg: concatRequiredMessage('Email') }
            }
        },
        mot_de_passe: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('mot de passe') },
                notEmpty: { msg: concatRequiredMessage('mot_de_passe') }
            }
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        prenom: {
            type: DataTypes.STRING
        },
        nom: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        date_de_naissance: {
            type: DataTypes.DATEONLY
        }

    }, {
        sequelize
    })

