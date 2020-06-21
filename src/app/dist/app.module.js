"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var search_component_1 = require("./components/search/search.component");
var artista_component_1 = require("./components/artista/artista.component");
var navbar_component_1 = require("./components/shared/navbar/navbar.component");
var app_routes_1 = require("./app.routes");
var spotify_service_1 = require("./services/spotify.service");
var noimg_pipe_1 = require("./pipes/noimg.pipe");
var tarjetas_component_1 = require("./components/tarjetas/tarjetas.component");
var loading_component_1 = require("./components/shared/loading/loading.component");
// @ts-ignore
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                search_component_1.SearchComponent,
                artista_component_1.ArtistaComponent,
                navbar_component_1.NavbarComponent,
                noimg_pipe_1.NoimgPipe,
                tarjetas_component_1.TarjetasComponent,
                loading_component_1.LoadingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                // http es pra hacer solicitudes http
                http_1.HttpClientModule,
                // importamos nuestras rutas de routes y le indicamos que queremos usar el gatito
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
            ],
            providers: [
                spotify_service_1.SpotifyService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
