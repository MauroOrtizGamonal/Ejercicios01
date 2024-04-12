import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  randomNumbers: number[] = [];

  constructor() {
    this.generateRandomNumbers();
  }

  generateRandomNumbers(): void {
    for (let i = 0; i < 10; i++) {
      const nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
      this.randomNumbers.push(nextNumber);
    }
  }
}
