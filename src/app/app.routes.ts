import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { StatementComponent } from './components/statement/statement.component';
import { TransactionComponent } from './components/transaction/transaction.component';

export const routes: Routes = [
    { path: 'transaction', component: TransactionComponent },
    { path: 'statement/:accountId', component: StatementComponent },
    { path: '', component: AccountComponent },
];
