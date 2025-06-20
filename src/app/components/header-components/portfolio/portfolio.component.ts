import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CriptoService } from '../../../service/critpto-service.service';

import { Cripto } from '../../../modelo/cripto';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {



  private readonly criptoService: CriptoService =  inject( CriptoService);
  criptos: Cripto[] = []


  selectedCripto: Cripto = {
    id:"",
    symbol: '',
    name: '',
    marketCapitalization: '',
    currentPrice: 0,
    company: ''
    } ;
  
  constructor() {
    this.loadCriptos();
  }

  
  loadCriptos() {
    this.criptoService.getCriptos().subscribe((criptos: Cripto[]) =>{
      this.criptos = criptos;
    });
    // this.criptos = this.criptoService.getCriptos();
  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.selectedCripto.id) {
        this.criptoService.updateCripto(this.selectedCripto).subscribe(() =>{
          this.loadCriptos();
        });
        // this.criptoService.updateCripto(this.selectedCripto);
      } else {
        const newCripto = this.selectedCripto;
        newCripto.id = this.generateId() ;
        this.criptoService.addCripto(newCripto).subscribe(()=>{
          this.loadCriptos();
        });
        // this.criptoService.addCripto(newCripto);
      }
      
      this.resetForm(form);

    }
  }


  resetForm(form: NgForm) {
    this.selectedCripto = {
      id:"",
      symbol: '',
      name: '',
      marketCapitalization: '',
      currentPrice: 0,
      company: '' 
    };

    if (form) {
      form.resetForm(this.selectedCripto);
      form.form.markAsPristine();
      form.form.markAsUntouched();
    }
  }
   
    
  deleteCripto(id: string) {
    this.criptoService.deleteCripto(id).subscribe(()=>{
      this.loadCriptos();
    });
    // this.criptoService.deleteCripto(id);
  }

  addCripto(newCripto: Cripto) {
    this.criptoService.addCripto(newCripto).subscribe(() => {
      this.loadCriptos();
    });
    // this.criptoService.addCripto(newCripto);
  }

  updateCripto(cripto: Cripto , form?: NgForm) {
    this.selectedCripto = cripto;
    this.criptoService.updateCripto(cripto).subscribe(() => {
      this.loadCriptos(); 
    });
    // this.criptoService.updateCripto(cripto);
    if (form) {
      form.form.markAsPristine();
      form.form.markAsUntouched();
    }
  }
  
  private generateId(): string {
    let idNumber: number  = this.criptos.length > 0
      ? Math.max(...this.criptos.map(a => Number(a.id))) + 1
      : 1;
    return idNumber.toString();
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
