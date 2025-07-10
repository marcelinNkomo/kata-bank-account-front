import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'app-withdraw',
    imports: [CommonModule, FormsModule],
    templateUrl: 'withdraw.component.html',
    styleUrl: 'withdraw.component.scss'
})
export class WithdrawComponent {
    amount: number = 0;
    
    constructor(private service: AccountService) { }

    withdraw() {
        this.service.withdraw(this.amount).subscribe(() => alert('Retrait effectué'));
    }
}