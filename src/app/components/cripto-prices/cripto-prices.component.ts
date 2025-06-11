import { Component, OnInit } from '@angular/core';
import { Cripto } from '../../modelo/cripto';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CriptoServiceApiService } from '../../service/cripto-service-api.service';


@Component({
  selector: 'app-cripto-prices',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cripto-prices.component.html',
  styleUrl: './cripto-prices.component.css'
})
export class CriptoPricesComponent implements OnInit {

  searchForm!: FormGroup;
  criptos: Cripto[] = [];
  filteredList: Cripto[] = [];
  paginatedList: Cripto[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 12;



  constructor(private criptoService: CriptoServiceApiService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchBar: new FormControl('')
    });

    this.criptoService.getCriptos().subscribe((data: any[]) => {
      this.criptos = data.map(item => ({
        id: item.id,
        symbol: item.symbol.toUpperCase(),
        name: item.name,
        marketCapitalization: `${(item as any).market_cap?.toLocaleString() ?? 'N/A'} USD`,
        currentPrice:`${(item as any).current_price?.toLocaleString() ?? 'N/A'} USD`
      }));

      this.filteredList = this.criptos;
    });
    
    this.filteredList = this.criptos;
    this.updatePaginatedList();

    this.searchForm.get('searchBar')?.valueChanges.subscribe(value => {
      this.filterCriptos(value);
    });
  
}

  filterCriptos(searchText: string): void {
    const lowerText = searchText.toLowerCase();
    this.filteredList = this.criptos.filter(cripto =>
      cripto.symbol.toLowerCase().includes(lowerText) ||
      cripto.name.toLowerCase().includes(lowerText)
    );
    this.currentPage = 1;
    this.updatePaginatedList();
  }
  
  updatePaginatedList(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedList = this.filteredList.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredList.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedList();
    }
  }

}
