import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-bullish',
  imports: [],
  templateUrl: './grid-bullish.component.html',
  styleUrl: './grid-bullish.component.css'
})

export class BullishComponent {
  mostrarMensaje : boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.mostrarMensaje = true;
    }, 500);
  }

}
