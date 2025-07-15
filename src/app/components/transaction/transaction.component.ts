import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Statement } from "../../models/statement";
import { Transaction } from "../../models/transaction";
import { AccountService } from "../../services/account.service";
import { CreatedAccountInfos } from "../../models/createdAccountInfos";
import { Router } from "@angular/router";

@Component({
    selector: 'app-transaction',
    imports: [CommonModule, FormsModule],
    templateUrl: 'transaction.component.html',
    styleUrl: 'transaction.component.scss'
})
export class TransactionComponent implements OnInit {

    accountId!: string
    clientId!: string
    amount: number = 0
    responseData!: Statement
    message!: string
    success!: boolean
    transactionIds!: CreatedAccountInfos

    constructor(private service: AccountService, private router: Router) { }

    ngOnInit(): void {
        this.transactionIds = this.service.getTransanctionIds()
        if (this.transactionIds) {
            this.accountId = this.transactionIds.accountId
            this.clientId = this.transactionIds.clientId
        } else {
            this.accountId = ''
            this.clientId = ''
        }
    }

    /**
     * methode effectue le dépôt
     */
    performDeposit() {
        this.handleTransaction('deposit', 'Dépôt effectué avec succès');
    }

    /**
     * methode qui effectue le retrait
     */
    performWithdrawal() {
        this.handleTransaction('withdraw', 'Retrait effectué avec succès');
    }

    /**
     * methode générique pour effectuer une transaction
     * @param action
     * @param successMessage 
     * @returns 
     */
    handleTransaction(
        action: 'deposit' | 'withdraw',
        successMessage: string
    ): void {
        if (!this.validate()) return;

        const transaction = new Transaction(this.accountId, this.clientId, this.amount);

        this.service[action](transaction).subscribe({
            next: (v) => {
                this.responseData = v;
                this.message = successMessage;
                this.success = true;
            },
            error: (e) => {
                console.log(e);
                this.message = e.error?.message || 'Une erreur est survenue';
                this.success = false;
            }
        });
    }

    /**
     * methode qui permet de valider les informations pour effectuer une transaction
     * @returns
     */
    validate(): boolean {
        if (this.accountId.length === 0 || this.clientId.length === 0 || this.amount <= 0) {
            this.message = 'Champs manquants ou Montant invalide'
            this.success = false
            return false
        }

        return true
    }

    /**
     * methode qui permet d'aller à la page des informations du compte
     * @returns 
     */
    goToStatement() {
        if (this.accountId.length === 0) {
            this.message = 'Veuillez renseigner le numéro de compte'
            this.success = false
            return
        }
        this.router.navigate([`/statement/${this.accountId}`])
    }

}