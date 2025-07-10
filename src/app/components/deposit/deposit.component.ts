import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'app-deposit',
    imports: [CommonModule, FormsModule],
    templateUrl: 'deposit.component.html',
    styleUrl: 'deposit.component.scss'
})
export class DepositComponent {
    amount: number = 0;

    constructor(private service: AccountService) { }

    deposit() {
        this.service.deposit(this.amount).subscribe(() => alert('Dépôt effectué'));
    }
}