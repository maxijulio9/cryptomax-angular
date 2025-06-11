import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CriptoService } from '../../../service/critpto-service.service';
import { Cripto } from '../../../modelo/cripto';
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

  criptosEmptyList: Cripto[] = [];

  criptos: Cripto[] = [];
  criptoForm: FormGroup;

  constructor() {
    this.criptoForm = this.formBuilder.group({
      id: [""],
      symbol: ['', Validators.required],
      name: ['', Validators.required],
      marketCapitalization: ['', Validators.required],
      currentPrice: [],
      company: ['']
    });
    this.loadCriptos();
  }


  loadCriptos() {

    this.criptoService.getCriptos().subscribe((criptos: Cripto[]) => {
      this.criptos = criptos;
    });
    // this.criptos = this.criptoService.getCriptos();
  }

  onSubmit() {
    if (this.criptoForm.valid) {
      const cripto = this.criptoForm.value;
      try{
         if (cripto.id) {
        this.criptoService.updateCripto(cripto).subscribe(() => {
          this.loadCriptos(); 
        } );
        // this.criptoService.updateCripto(cripto);
      } else {
        const newCripto = { ...cripto, id: this.generateId() };
        this.criptoService.addCripto(newCripto).subscribe(() => {
          this.loadCriptos();
          this.resetForm();
        });
        // this.addCripto(newCripto);
      }

      }
      catch (error) {
        console.error('Error al enviar el formulario:', error);
        return;
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
      marketCapitalization: cripto.marketCapitalization,
      currentPrice: cripto.currentPrice,
      company: cripto.company || ''
    });
  } 

  
  deleteCripto(id: string) {
    if (confirm('Are you sure to delete this cripto?')) {
      this.criptoService.deleteCripto(id).subscribe(() =>{
        this.loadCriptos();
      }
      );
    }

    // this.criptoService.deleteCripto(id);
    // this.loadCriptos();
  }


  resetForm() {
    this.criptoForm.reset({
      id: "",
      symbol: '',
      name: '',
      marketCapitalization: '',
      currentPrice: 0,
      company: ''
    });
  } 

  private generateId(): string {
    return (this.criptos.length > 0 ? Math.max(...this.criptos.map(c => Number(c.id))) + 1 : 1).toString();
  }



}
