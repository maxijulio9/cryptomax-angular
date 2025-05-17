import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CriptoService } from '../../service/critpto-service.service';
import { Cripto } from '../../modelo/cripto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-react',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './portfolio-react.component.html',
  styleUrl: './portfolio-react.component.css'
})
export class PortfolioReactComponent {
  private criptoService = inject(CriptoService);
  private formBuilder = inject(FormBuilder);

  criptos: Cripto[] = [];
  criptoForm: FormGroup;

  constructor() {
    this.criptoForm = this.formBuilder.group({
      id: [0],
      symbol: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      blockchain: [null],
      marketCapitalization: ['', Validators.required],
      currentPrice: [0],
      useCase: [null]
    });
    this.loadCriptos();
  }


  loadCriptos() {
    this.criptos = this.criptoService.getCriptos();
  }

  onSubmit() {
    if (this.criptoForm.valid) {
      const cripto = this.criptoForm.value;
      if (cripto.id) {
        this.criptoService.updateCripto(cripto);
      } else {
        const newCripto = { ...cripto, id: this.generateId() };
        this.criptoService.addCripto(newCripto);
      }
      
      this.loadCriptos();
      this.resetForm();
    }
  }

  updateCripto(cripto: Cripto) {
    this.criptoForm.patchValue({
      id: cripto.id,
      symbol: cripto.symbol,
      name: cripto.name,
      category: cripto.category,
      blockchain: cripto.blockchain,
      marketCapitalization: cripto.marketCapitalization,
      currentPrice: cripto.currentPrice,
      useCase: cripto.useCase
    });
  } 

  deleteCripto(id: number) {
    this.criptoService.deleteCripto(id);
    this.loadCriptos();
  }



  resetForm() {
    this.criptoForm.reset({
      id: 0,
      symbol: '',
      name: '',
      category: '',
      blockchain: '',
      marketCapitalization: '',
      currentPrice: 0,
      useCase: ''
    });
  } 

  private generateId(): number {
    return this.criptos.length > 0 ? Math.max(...this.criptos.map(c => c.id)) + 1 : 1;
  }



}
