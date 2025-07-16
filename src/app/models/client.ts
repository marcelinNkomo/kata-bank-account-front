
/**
 * Classe qui contient les informations de client après l'ouverture du compte
 */
export class Client {
    constructor(
        public id: string,
        public lastname: string,
        public firstname: string,
        public date: Date,
    ) { }
}