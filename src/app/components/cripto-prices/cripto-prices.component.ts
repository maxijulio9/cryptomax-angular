import { Component } from '@angular/core';
import { Cripto } from '../../modelo/cripto';
import { CommonModule } from '@angular/common'; 
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cripto-prices',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cripto-prices.component.html',
  styleUrl: './cripto-prices.component.css'
})
export class CriptoPricesComponent {

  searchForm!: FormGroup;
  searchBar: string = '';

  criptos: Cripto[] = [
    {
      id: '0',
      symbol: 'BTC',
      name: 'Bitcoin',
      category: 'Cryptocurrency',
      blockchain: 'Bitcoin Blockchain',
      marketCapitalization: '800 billion USD',
      currentPrice: 40000, 
      useCase: 'Digital Gold'
    },
    {
      id: '1',
      symbol: 'XRP',
      name: 'Bitcoin',
      category: 'Cryptocurrency',
      blockchain: 'Bitcoin Blockchain',
      marketCapitalization: '800 billion USD',
      currentPrice: 40000, 
      useCase: 'Digital Gold'
    },
    {
      id: '2',
      symbol: 'POL',
      name: 'Polkadot',
      category: 'Cryptocurrency',
      blockchain: 'Bitcoin Blockchain',
      marketCapitalization: '800 billion USD',
      currentPrice: 40000, 
      useCase: 'Digital Gold'
    },
    {
      id: '3',
      symbol: 'ETH',
      name: 'Ethereum',
      category: 'Cryptocurrency',
      blockchain: 'Ethereum Blockchain',
      marketCapitalization: '300 billion USD',
      currentPrice: 2500,    
      useCase: 'Smart Contracts'
    }
  ];

  filteredList: Cripto[] = [];

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchBar: new FormControl('')
    });
    this.searchForm.get('searchBar')?.valueChanges.subscribe(value => {
    this.filterCriptos(value);
  });

  this.filteredList = this.criptos;

  }

  filterCriptos(searchText: string): void {
  const lowerText = searchText.toLowerCase();
  this.filteredList = this.criptos.filter(cripto =>
    cripto.symbol.toLowerCase().includes(lowerText) ||
    cripto.name.toLowerCase().includes(lowerText)
  );
}

  // get filteredCriptos(): Cripto[] {
  //   const searchBarValue = this.searchForm.get('searchBar')?.value.toLowerCase();
  //   return this.criptos.filter(cripto => 
  //     cripto.symbol.toLowerCase().includes(searchBarValue) || 
  //     cripto.name.toLowerCase().includes(searchBarValue)
  //   );
  // }
  

}
