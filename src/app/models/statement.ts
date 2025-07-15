
/**
 * Classe qui continet les informations d'une transaction déjà effectuée
 */
export class Statement {
    constructor(
        public date: Date,
        public amount: number,
        public balance: number
    ){}
}