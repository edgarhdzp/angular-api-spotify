// importamos los routes
import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';


export const ROUTES: Routes = [
  // nuestro arreglo de rutas
  { path: 'Inicio', component: HomeComponent},
  { path: 'Buscar', component: SearchComponent},
  { path: 'artist/:id', component: ArtistaComponent},
  // aqui indicamos que si se ingresa una ruta vacia redireccione a home
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  // aqui indicamos que si se ingresa cualquier valor que no este  en nuestro arreglo redireccione a home
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];
