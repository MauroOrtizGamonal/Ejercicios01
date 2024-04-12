import { Component } from '@angular/core';

// Enumeración para representar las estaciones del año
enum Temporada {
  Otono = "Otoño",
  Invierno = "Invierno",
  Primavera = "Primavera",
  Verano = "Verano"
}

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})

export class Ejercicio3Component {
 // Definición del enum Temporada
 Temporada = Temporada;

 // Función que devuelve los meses en una temporada específica
 whichMonths(season: Temporada): string {
   let monthsInSeason: string;
   switch (season) {
     case Temporada.Otono:
       monthsInSeason = "Septiembre a Noviembre";
       break;
     case Temporada.Invierno:
       monthsInSeason = "Diciembre a Febrero";
       break;
     case Temporada.Primavera:
       monthsInSeason = "Marzo a Mayo";
       break;
     case Temporada.Verano:
       monthsInSeason = "Junio a Agosto";
       break;
     default:
       monthsInSeason = "Estación no válida";
   }
   return monthsInSeason;
 }

}
