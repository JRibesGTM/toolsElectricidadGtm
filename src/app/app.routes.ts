import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListadoComponent } from './components/listado/listado.component';

export const routes: Routes = [
  {
    path: 'calculadora',
    component: CalculadoraComponent,
  },

  {
    path: 'listado',
    component: ListadoComponent,
  },
];
