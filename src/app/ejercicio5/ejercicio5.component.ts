import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {
  num1: number;
  num2: number;
  resultado: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }

  sumar(): void {
    this.resultado = this.num1 + this.num2;
  }

  restar(): void {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }

  dividir(): void {
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      alert('No se puede dividir por cero');
    }
  }

}
