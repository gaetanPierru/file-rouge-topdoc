import { ActiviteHandler } from "./handler/activite.handler";
import { BannisHandler } from "./handler/bannis.handler";
import { CongeHandler } from "./handler/conge.handler";
import { JourHandler } from "./handler/jour.handler";
import { LocalisationHandler } from "./handler/localisation.handler";
import { PlanningHandler } from "./handler/planning.handler";
import { RendezVousHandler } from "./handler/rendezVous.handler";
import { RoleHandler } from "./handler/role.handler";
import { UserHandler } from "./handler/user.handler";
import { ActiviteRepository } from "./repository/activite.repository";
import { BannisRepository } from "./repository/bannis.repository";
import { CongeRepository } from "./repository/conge.repository";
import { JourRepository } from "./repository/jour.repository";
import { LocalisationRepository } from "./repository/localisation.repository";
import { PlanningRepository } from "./repository/planning.repository";
import { RendezVousRepository } from "./repository/rendezVous.repository";
import { RoleRepository } from "./repository/role.repository";
import { UserRepository } from "./repository/user.repository";
import { ActiviteService } from "./services/Activite.service";
import { BannisService } from "./services/bannis.service";
import { CongeService } from "./services/conge.service";
import { JourService } from "./services/jour.service";
import { LocalisationService } from "./services/localisation.service";
import { PlanningService } from "./services/planning.service";
import { RendezVousService } from "./services/rendezVous.service";
import { RoleService } from "./services/role.service";
import { UserService } from "./services/user.service";

export const activiteHandler = new ActiviteHandler(new ActiviteService(new ActiviteRepository()))
export const bannisHandler = new BannisHandler(new BannisService(new BannisRepository()))
export const congeHandler = new CongeHandler(new CongeService(new CongeRepository()))
export const jourHandler = new JourHandler(new JourService(new JourRepository()))
export const localisationHandler = new LocalisationHandler(new LocalisationService(new LocalisationRepository()))
export const planningHandler = new PlanningHandler(new PlanningService(new PlanningRepository()))
export const rdvHandler = new RendezVousHandler(new RendezVousService(new RendezVousRepository()))
export const roleHandler = new RoleHandler(new RoleService(new RoleRepository()))
export const userHandler = new UserHandler(new UserService(new UserRepository()))