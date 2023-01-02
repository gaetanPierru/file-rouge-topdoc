import { ActiviteHandler } from "./handler/activite.handler";
import { ActiviteRepository } from "./repository/activite.repository";
import { ActiviteService } from "./services/Activite.service";

export const activiteHandler = new ActiviteHandler(new ActiviteService(new ActiviteRepository()))