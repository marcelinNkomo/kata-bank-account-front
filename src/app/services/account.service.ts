import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction";


@Injectable({ providedIn: 'root' })
export class AccountService {
  private baseUrl = 'http://localhost:8080/account';

  constructor(private http: HttpClient) {}

  deposit(amount: number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/deposit?amount=${amount}`, {});
  }

  withdraw(amount: number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/withdraw?amount=${amount}`, {});
  }

  getStatement(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/statement`);
  }
}