import { Client } from "./client";
import { Statement } from "./statement";

/**
 * Classe qui contient les informations du compte
 */
export class Account {
    constructor(
        public client: Client,
        public balance: number,
        public date: Date,
        public statements: Statement[]
    ) { }
}