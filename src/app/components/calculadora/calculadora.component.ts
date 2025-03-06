import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  pantalla: string = '';

  botones: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    'C',
  ];

  presionarBoton(valor: string) {
    if (valor === 'C') {
      this.pantalla = '';
    } else if (valor === '=') {
      try {
        this.pantalla = eval(this.pantalla);
      } catch {
        this.pantalla = 'Error';
      }
    } else {
      this.pantalla += valor;
    }
  }
}
