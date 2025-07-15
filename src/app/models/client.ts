
/**
 * Classe qui contient les informations de client après l'ouverture du compte
 */
export class Client {
    constructor(
        public id: string,
        public lastName: string,
        public firstName: string,
        public date: Date,
    ) { }
}