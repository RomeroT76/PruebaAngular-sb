import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  nombre = 'Roberto Alejandro';
  estado = true;
  suma = 0;
  resta = 0;

  upperCase() {
    if (this.estado) {
      this.nombre = this.nombre.toUpperCase();
      this.estado = false;
    } else {
      this.nombre = this.nombre.toLowerCase();
      this.estado = true;
    }
  }

  sumaF(n1: string, n2: string) {
    const num1 = parseInt(n1);
    const num2 = parseInt(n2);
    this.suma = num1 + num2;
  }

  restaF(n1: string, n2: string) {
    const num1 = parseInt(n1);
    const num2 = parseInt(n2);
    this.resta = num1 - num2;
  }
}