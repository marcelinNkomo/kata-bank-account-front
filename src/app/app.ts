import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DepositComponent } from './components/deposit/deposit.component';
import { StatementComponent } from './components/statement/statement.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

@Component({
  selector: 'app-root',
  imports: [
    DepositComponent,
    WithdrawComponent,
    StatementComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
