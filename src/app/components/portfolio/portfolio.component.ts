import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cripto {
  symbol: string;
  name: string;
  category: string;
  blockchain: string;
  marketCap: string;
  currentPrice: string;
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
  cryptos: Cripto[] = [];

  newCripto: Cripto = this.resetCripto();
  editingIndex: number = -1;

  onSubmit() {
    if (this.editingIndex === -1) {
      this.cryptos.push({ ...this.newCripto });
    } else {
      this.cryptos[this.editingIndex] = { ...this.newCripto };
    }
    this.newCripto = this.resetCripto();
    this.editingIndex = -1;
  }

  editCripto(index: number) {
    this.newCripto = { ...this.cryptos[index] };
    this.editingIndex = index;
  }

  deleteCripto(index: number) {
    this.cryptos.splice(index, 1);
    this.cancelEdit();
  }

  cancelEdit() {
    this.newCripto = this.resetCripto();
    this.editingIndex = -1;
  }

  private resetCripto(): Cripto {
    return {
      symbol: '',
      name: '',
      category: '',
      blockchain: '',
      marketCap: '',
      currentPrice: '',
      useCase: '',
    };
  }
}
