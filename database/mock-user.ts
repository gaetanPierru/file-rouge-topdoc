import { userTypes } from "../types/user";

export const users: userTypes[] = [
  {
    email: "cse@cse.com",
    telephone: "800000001",
    mot_de_passe: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    localisationId: 1,
    prenom: 'a',
    nom: 'a',
    genre: 'M',
    date_de_naissance: new Date()
  },
  {
    email: "test@gmail.com",
    telephone: "111111112",
    mot_de_passe: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    localisationId: 2,
    prenom: 'b',
    nom: 'b',
    genre: 'M',
    date_de_naissance: new Date()
  },
  {
    email: "s@gmail.com",
    telephone: "111111111",
    mot_de_passe: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    localisationId: 3,
    prenom: 'c',
    nom: 'c',
    genre: 'M',
    date_de_naissance: new Date()
  },
];
