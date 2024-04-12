import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  firstName: string | undefined;
  lastName: string | undefined;
  fullName: string | undefined;
  age: number | undefined;
  ukCitizen: boolean | undefined;
  citizenStatus: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // Declaración de variables con tipos de datos
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;

    // Asignación de valores a las variables
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;

    // Verificación del estatus de ciudadanía y asignación de valor a citizenStatus
    if (ukCitizen) {
      this.citizenStatus = `a citizen of the United Kingdom`;
    } else {
      this.citizenStatus = `not a citizen of the United Kingdom`;
    }

    // Asignación de valores a las propiedades del componente
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.ukCitizen = ukCitizen;
    this.fullName = fullName;
  }

}

