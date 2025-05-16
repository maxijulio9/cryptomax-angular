import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface Cripto {
  id: number;
  symbol: string;
  name: string;
  category: string;
  blockchain: string;
  marketCapitalization: string;
  currentPrice: number;
  useCase: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {



  criptos: Cripto[] = [
    {
    id : 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    category: 'Cryptocurrency',
    blockchain: 'Bitcoin',
    marketCapitalization: '800 billion',
    currentPrice: 104000,
    useCase: 'Digital Gold',
    }
  ];


  selectedCripto: Cripto = {
    id:0,
    symbol: 'BTC',
    name: '',
    category: '',
    blockchain: '',
    marketCapitalization: '',
    currentPrice: 0,
    useCase: '',
    } ;
  
  constructor() {
    this.loadCriptos();
  }

  loadCriptos(): Cripto[]{
    return this.criptos;
    
  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.selectedCripto.id) {
        this.updateCripto(this.selectedCripto);
      } else {
        const newCripto = this.selectedCripto;
        newCripto.id = this.generateId() ;
        this.addCripto(newCripto);
      }
      this.loadCriptos();
      this.resetForm(form);

    }
  }


  resetForm(form: NgForm) {
    this.selectedCripto = {
      id:0,
      symbol: '',
      name: '',
      category: '',
      blockchain: '',
      marketCapitalization: '',
      currentPrice: 0,
      useCase: '',
    };
  }
   
    
  deleteCripto(id: number) {
    this.criptos = this.criptos.filter(cripto => cripto.id !== id);
  }
  
  private generateId(): number {
    return this.criptos.length > 0
      ? Math.max(...this.criptos.map(a => a.id)) + 1
      : 1;
  }


  addCripto(newCripto: Cripto) {
    this.criptos.push(newCripto);
  }

  updateCripto(cripto: Cripto , form?: NgForm) {
    const index = this.criptos.findIndex(c => c.id === cripto.id);
    if (index !== -1) {
      this.criptos[index] = cripto;
    }
  }


  // cryptos: Cripto[] = [];

  // newCripto: Cripto = this.resetCripto();
  // editingIndex: number = -1;

  // onSubmit() {
  //   if (this.editingIndex === -1) {
  //     this.cryptos.push({ ...this.newCripto });
  //   } else {
  //     this.cryptos[this.editingIndex] = { ...this.newCripto };
  //   }
  //   this.newCripto = this.resetCripto();
  //   this.editingIndex = -1;
  // }

  // editCripto(index: number) {
  //   this.newCripto = { ...this.cryptos[index] };
  //   this.editingIndex = index;
  // }

  // deleteCripto(index: number) {
  //   this.cryptos.splice(index, 1);
  //   this.cancelEdit();
  // }

  // cancelEdit() {
  //   this.newCripto = this.resetCripto();
  //   this.editingIndex = -1;
  // }

  // private resetCripto(): Cripto {
  //   return {
  //     symbol: '',
  //     name: '',
  //     category: '',
  //     blockchain: '',
  //     marketCap: '',
  //     currentPrice: '',
  //     useCase: '',
  //   };
  // }
  }
