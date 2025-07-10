
export class Transaction {
    constructor(
        public id: string,
        public date: Date,
        public amount: number,
        public balance: number
    ){}
}