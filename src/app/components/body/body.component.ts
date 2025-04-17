import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent {
  mostrarMensaje : boolean = false;  // Al inicio, el mensaje está oculto

  ngOnInit() {
    setTimeout(() => {
      this.mostrarMensaje = true;  // Activa el mensaje después de 1 segundo
    }, 1000);
  }

}
