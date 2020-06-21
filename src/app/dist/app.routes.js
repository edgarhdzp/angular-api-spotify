"use strict";
exports.__esModule = true;
exports.ROUTES = void 0;
var home_component_1 = require("./components/home/home.component");
var search_component_1 = require("./components/search/search.component");
var artista_component_1 = require("./components/artista/artista.component");
exports.ROUTES = [
    // nuestro arreglo de rutas
    { path: 'Inicio', component: home_component_1.HomeComponent },
    { path: 'Buscar', component: search_component_1.SearchComponent },
    { path: 'artist/:id', component: artista_component_1.ArtistaComponent },
    // aqui indicamos que si se ingresa una ruta vacia redireccione a home
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // aqui indicamos que si se ingresa cualquier valor que no este  en nuestro arreglo redireccione a home
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
