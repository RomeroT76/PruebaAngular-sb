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
  result = 0;

  upperCase() {
    if (this.estado) {
      this.nombre = this.nombre.toUpperCase();
      this.estado = false;
    } else {
      this.nombre = this.nombre.toLowerCase();
      this.estado = true;
    }
  }

  calculate(expresion: string) {
    this.result = eval(expresion);
  }
}