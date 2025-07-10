import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'app-statement',
    imports: [CommonModule],
    templateUrl: 'statement.component.html',
    styleUrl: 'statement.component.scss'
})
export class StatementComponent implements OnInit {
    transactions: any[] = [];
    constructor(private service: AccountService) { }

    ngOnInit(): void {
        this.service.getStatement().subscribe(data => this.transactions = data);
    }

}