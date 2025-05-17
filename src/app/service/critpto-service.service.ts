import { Injectable } from '@angular/core';
import { Cripto } from '../modelo/cripto';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  constructor() { }

  private criptos: Cripto[] = [
    {
      id: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      category: 'Cryptocurrency',
      blockchain: 'Bitcoin',
      marketCapitalization: '800 billion USD',
      currentPrice: 40000,
      useCase: 'Digital Gold'
    },
    {
      id: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      category: 'Cryptocurrency',
      blockchain: 'Ethereum',
      marketCapitalization: '300 billion USD',
      currentPrice: 2500,
      useCase: 'Smart Contracts'
    }
  ];

  
  getCriptos(): Cripto[] {
    return this.criptos;
  }

  deleteCripto(id: number) {
    this.criptos = this.criptos.filter(cripto => cripto.id !== id);
  }
  


  addCripto(newCripto: Cripto) {
    this.criptos.push(newCripto);
  }

  updateCripto(cripto: Cripto) {
    const index = this.criptos.findIndex(c => c.id === cripto.id);
    if (index !== -1) {
      this.criptos[index] = cripto;
    }
  }
}
