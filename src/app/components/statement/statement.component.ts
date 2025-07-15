import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account.service";
import { Account } from "../../models/account";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-statement',
    imports: [CommonModule],
    templateUrl: 'statement.component.html',
    styleUrl: 'statement.component.scss'
})
export class StatementComponent implements OnInit {
    accountId!: string
    account!: Account;

    constructor(private service: AccountService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.accountId = this.route.snapshot.params['accountId']
        this.service.getStatement(this.accountId).subscribe(data => this.account = data)
    }

    /**
     * methode qui permet d'imprimer son relevé de compte
     */
    print() {
        window.print()
    }

}