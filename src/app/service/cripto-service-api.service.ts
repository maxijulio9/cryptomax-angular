import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cripto } from '../modelo/cripto';

@Injectable({
  providedIn: 'root'
})
export class CriptoServiceApiService {

  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  constructor(private http: HttpClient) {}

  getCriptos(): Observable<Cripto[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
