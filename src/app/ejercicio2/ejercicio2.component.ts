import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  resultado: number | undefined;

  constructor() { }

  ejercicio2(): void {
    let x: number = 5;
    let y: number = 7;
    this.resultado = x + y;
  }
}
