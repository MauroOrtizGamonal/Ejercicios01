import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Moneda {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})
export class Ejercicio6Component {
  cantidad: number = 0;
  monedas: Moneda[] = [
    { nombre: 'Euro', descripcion: 'Euro (EUR)' },
    { nombre: 'Libra', descripcion: 'Libra esterlina (GBP)' },
    { nombre: 'Dolar', descripcion: 'Dólar estadounidense (USD)' }
  ];
  monedaOrigen: Moneda = this.monedas[0];
  monedaDestino: Moneda = this.monedas[0];
  resultado: number = 0;

  constructor() { }

  convertirDivisa(): void {
    this.resultado = this.cantidad * this.obtenerTasaDeCambio(this.monedaDestino, this.monedaOrigen);
    this.resultado = Math.round(this.resultado * 100) / 100; // Redondear a dos decimales
  }

  obtenerTasaDeCambio(monedaDestino: Moneda, monedaOrigen: Moneda): number {
    // Simulamos tasas de cambio para la demostración
    switch (monedaDestino.nombre) {
      case 'Euro':
        switch (monedaOrigen.nombre) {
          case 'Euro':
            return 1;
          case 'Libra':
            return 1.18; // 1 Libra = 1.18 Euros
          case 'Dolar':
            return 0.85; // 1 Dólar = 0.85 Euros
          default:
            return 0;
        }
      case 'Libra':
        switch (monedaOrigen.nombre) {
          case 'Euro':
            return 0.85; // 1 Euro = 0.85 Libras
          case 'Libra':
            return 1;
          case 'Dolar':
            return 0.72; // 1 Dólar = 0.72 Libras
          default:
            return 0;
        }
      case 'Dolar':
        switch (monedaOrigen.nombre) {
          case 'Euro':
            return 1.18; // 1 Euro = 1.18 Dólares
          case 'Libra':
            return 1.39; // 1 Libra = 1.39 Dólares
          case 'Dolar':
            return 1;
          default:
            return 0;
        }
      default:
        return 0;
    }
  }
}
