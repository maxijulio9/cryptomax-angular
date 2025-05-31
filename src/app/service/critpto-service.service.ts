import { Injectable } from '@angular/core';
import { Cripto } from '../modelo/cripto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  //private readonly baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  private readonly baseUrl ='http://localhost:3000/criptos';


  constructor(private http: HttpClient) { }


  // private criptos: Cripto[] = [
  //   {
  //     id: 1,
  //     symbol: 'BTC',
  //     name: 'Bitcoin',
  //     category: 'Cryptocurrency',
  //     blockchain: 'Bitcoin',
  //     marketCapitalization: '800 billion USD',
  //     currentPrice: 40000,
  //     useCase: 'Digital Gold'
  //   },
  //   {
  //     id: 2,
  //     symbol: 'ETH',
  //     name: 'Ethereum',
  //     category: 'Cryptocurrency',
  //     blockchain: 'Ethereum',
  //     marketCapitalization: '300 billion USD',
  //     currentPrice: 2500,
  //     useCase: 'Smart Contracts'
  //   }
  // ];

  
  getCriptos(): Observable<Cripto[]> {
    return this.http.get<Cripto[]>(this.baseUrl)
    // return this.criptos;
  }

  deleteCripto(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
    // this.criptos = this.criptos.filter(cripto => cripto.id !== id);
  }
  

  addCripto(newCripto: Cripto): Observable<Cripto> {
    return this.http.post<Cripto>(this.baseUrl, newCripto);
    // this.criptos.push(newCripto);
  }

  updateCripto(cripto: Cripto): Observable<Cripto> {
    return this.http.put<Cripto>(`${this.baseUrl}/${cripto.id}`, cripto);
    // const index = this.criptos.findIndex(c => c.id === cripto.id);
    // if (index !== -1) {
    //   this.criptos[index] = cripto;
    // }
  }
}
