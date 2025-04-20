import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-bullish',
  imports: [],
  templateUrl: './grid-bullish.component.html',
  styleUrl: './grid-bullish.component.css'
})

export class BullishComponent {
  mostrarMensaje : boolean = false;  // Al inicio, el mensaje está oculto

  ngOnInit() {
    setTimeout(() => {
      this.mostrarMensaje = true;  // Activa el mensaje después de 1 segundo
    }, 500);
  }

}
