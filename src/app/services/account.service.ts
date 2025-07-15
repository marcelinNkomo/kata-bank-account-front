import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Account } from "../models/account";
import { CreatedAccountInfos } from "../models/createdAccountInfos";
import { NewClientInfos } from "../models/newClientInfos";
import { Statement } from "../models/statement";
import { Transaction } from "../models/transaction";


@Injectable({ providedIn: 'root' })
export class AccountService {
  private baseUrl = 'http://localhost:8080/account';

  transactionIds!: CreatedAccountInfos // permet de partager les informations dans différentes pages

  constructor(private http: HttpClient) { }

  // methode qui appelle le endpoint de creation du compte
  createAccount(clientInfos: NewClientInfos): Observable<CreatedAccountInfos> {
    return this.http.post<CreatedAccountInfos>(`${this.baseUrl}`, clientInfos)
  }

  // methode qui appelle le endpoint de la transaction Dépôt
  deposit(transaction: Transaction): Observable<Statement> {
    return this.http.post<Statement>(`${this.baseUrl}/deposit`, transaction)
  }

  // methode qui appelle le endpoint de la transaction Retrait
  withdraw(transaction: Transaction): Observable<Statement> {
    return this.http.post<Statement>(`${this.baseUrl}/withdraw`, transaction)
  }

  // methode qui appelle le endpoint qui permet d'afficher les informations du compte
  getStatement(accountId: string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/statement/${accountId}`)
  }

  // getter et setter
  storeTransanctionIds(transactionIds: CreatedAccountInfos) {
    this.transactionIds = transactionIds
  }

  getTransanctionIds() {
    return this.transactionIds
  }
}