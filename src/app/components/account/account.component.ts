import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AccountService } from "../../services/account.service";
import { NewClientInfos } from "../../models/newClientInfos";
import { CreatedAccountInfos } from "../../models/createdAccountInfos";
import { Router } from "@angular/router";

@Component({
    selector: 'app-account',
    imports: [CommonModule, FormsModule],
    templateUrl: 'account.component.html',
    styleUrl: 'account.component.scss'
})
export class AccountComponent implements OnInit {
    lastname!: string;
    firstname!: string;
    responseData!: CreatedAccountInfos;
    message!: string;
    success!: boolean;

    constructor(private service: AccountService, private router: Router) { }

    ngOnInit(): void {
        this.firstname = ''
        this.lastname = ''
    }

    /**
     * methode qui permet de créer un compte
     * @returns 
     */
    createAccount() {
        if (this.firstname.length === 0 && this.lastname.length === 0) {
            this.success = false
            this.message = 'Veuillez renseigner au moins un champ'
            return
        }

        this.service.createAccount(new NewClientInfos(this.lastname, this.firstname)).subscribe({
            next: (v) => {
                this.responseData = v
                this.success = true
                this.message = 'Compte créé avec succès'
            },
            error: (e) => {
                this.message = 'Erreur survenue lors de la création du compte'
                this.success = false
            }
        });
    }

    /**
     * methode qui permet d'aller à la page des actions liées aux transactions (retrait & depôt)
     */
    goToMakeTransction() {
        if (this.responseData) {
            this.service.storeTransanctionIds(this.responseData)
        }
        this.router.navigate(['/transaction'])
    }
}