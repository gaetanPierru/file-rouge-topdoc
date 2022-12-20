import { DataTypes, Sequelize } from "sequelize"
import { tokenTypes } from "../types/token"
import { userTypes } from "../types/user"
import { users } from './mock-user'
import { localisationTypes } from "../types/localisation"
import { roleTypes } from "../types/role"
import { tokens } from './mock-token'
import { localisations } from './mock-localisation'
import { roles } from './mock-role'
import { activities } from "./mock-activity"
import { plannings } from "./mock-planning"
import { mockRendezVous } from "./mock-rendez-vous"
import { activityTypes } from "../types/activity"
import { planningTypes } from "../types/planning"
import { rendezVousTypes } from "../types/rendezVous"

const UserModel = require('../models/users')
const TokenModel = require('../models/tokens')
const LocalisationModel = require('../models/localisations')
const RoleModel = require('../models/roles')
const RoleUserModel = require('../models/roleUsers')
const BannisModel = require('../models/bannis')
const BanUserModel = require('../models/banUsers')
const AcivityModel = require('../models/activities')
const CongeModel = require('../models/conge')
const PlanningModel = require('../models/planning')
const JourModel = require('../models/jour')
const JourPlanningModel = require('../models/jourPlanning')
const RendezVousModel = require('../models/rendezVous')
const ActivityUsersModel = require('../models/activityUsers')

const sequelize = new Sequelize(
    `${process.env.NAME_DATABASE}`,
    `${process.env.HOST_DATABASE}`,
    `${process.env.PASS_DATABASE}`,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {
            useUTC: false,
            dateStrings: true,
            typeCast: true
        },
        timezone: '+02:00'
    }
)

sequelize.authenticate()
    .then(() => console.log('Link established'))
    .catch((error: Error) => console.error(`Error: ${error}`)
    )

export const User = UserModel(sequelize, DataTypes)
export const Token = TokenModel(sequelize, DataTypes)
export const Localisation = LocalisationModel(sequelize, DataTypes)
export const Role = RoleModel(sequelize, DataTypes)
export const RoleUser = RoleUserModel(sequelize, DataTypes)
export const Bannis = BannisModel(sequelize, DataTypes)
export const BanUser = BanUserModel(sequelize, DataTypes)
export const Activity = AcivityModel(sequelize, DataTypes)
export const Conge = CongeModel(sequelize, DataTypes)
export const Planning = PlanningModel(sequelize, DataTypes)
export const Jour = JourModel(sequelize, DataTypes)
export const jourPlanning = JourPlanningModel(sequelize, DataTypes)
export const RendezVous = RendezVousModel(sequelize, DataTypes)
export const activityUsers = ActivityUsersModel(sequelize, DataTypes)


User.hasOne(Token, { onDelete: 'cascade', hooks: true })
Token.belongsTo(User, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(User, { onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true })

User.hasOne(RendezVous, { onDelete: 'cascade', hooks: true })
RendezVous.belongsTo(User, { onDelete: 'cascade', hooks: true })

Planning.hasOne(RendezVous, { onDelete: 'cascade', hooks: true })
RendezVous.belongsTo(Planning, { onDelete: 'cascade', hooks: true })


Activity.hasOne(Conge, { onDelete: 'cascade', hooks: true })
Conge.belongsTo(Activity, { onDelete: 'cascade', hooks: true })

Activity.hasOne(Planning, { onDelete: 'cascade', hooks: true })
Planning.belongsTo(Activity, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(Activity, { onDelete: 'cascade', hooks: true })
Activity.belongsTo(Localisation, { onDelete: 'cascade', hooks: true })

Role.belongsToMany(User, { through: RoleUser })
User.belongsToMany(Role, { through: RoleUser })

Planning.belongsToMany(User, { through: jourPlanning })
Jour.belongsToMany(Role, { through: jourPlanning })

Bannis.belongsToMany(User, {through: BanUser })
User.belongsToMany(Bannis, {through: BanUser })

Activity.belongsToMany(User, {through: activityUsers })
User.belongsToMany(Activity, {through: activityUsers })

export const initDb = () => {
    return sequelize.sync({force: true}).then(() => {
        roles.map((role: roleTypes) => {
            Role.create({   
                role: role.role
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        localisations.map((localisation: localisationTypes) => {
            Localisation.create({
                address: localisation.address,
                code_postal: localisation.code_postal,
                ville: localisation.ville,
                numero_de_rue: localisation.numero_de_rue
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        users.map((user: userTypes, index: number) => {
            User.create({
                email: user.email,
                telephone: user.telephone,
                mot_de_passe: user.mot_de_passe,
                localisationId: user.localisationId,
                nom: user.nom,
                prenom: user.prenom,
                date_de_naissance: user.date_de_naissance,
                genre: user.genre
            }).then(async (req: any) => {
                const roleRow = await Role.findByPk(index + 1);
                await req.addRole(roleRow, { through: RoleUser })

            })
        })

        activities.map((activity: activityTypes) => {
            Activity.create({
                fonction: activity.fonction,
                description: activity.description,
                type: activity.type,
                estActif: activity.estActif,
                localisationId : activity.localisationId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        tokens.map((token: tokenTypes) => {
            Token.create({
                refreshToken: token.refreshToken,
                utilisateurId: token.UserId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        plannings.map((planning: planningTypes) => {
            Planning.create({
                duree_validite_calendrier: planning.duree_validite_calendrier,
                date_debut_planning: planning.date_debut_planning,
                nom_planning: planning.nom_planning,
                activiteId: planning.activiteId
            }).then((response: { toJSON: () => string }) => {console.log(response.toJSON())
                mockRendezVous.map((rendezVous: rendezVousTypes) => {
                    RendezVous.create({
                        planningId: rendezVous.planningId,
                        utilisateurId: rendezVous.utilisateurId,
                        date_rendez_vous: rendezVous.date_rendez_vous,
                        duree_rendez_vous: rendezVous.duree_rendez_vous
                    }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
                })
            })
        })

        console.log('Database created')
    })
}
