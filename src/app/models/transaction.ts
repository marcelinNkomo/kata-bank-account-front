
/**
 * Classe qui contient les informations nécessaires pour réaliser une transaction
 */
export class Transaction {
    constructor(
        public accountId: string,
        public clientId: string,
        public amount: number
    ) { }
}