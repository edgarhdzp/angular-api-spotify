"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArtistaComponent = void 0;
var core_1 = require("@angular/core");
var ArtistaComponent = /** @class */ (function () {
    function ArtistaComponent(router, spotify) {
        var _this = this;
        this.router = router;
        this.spotify = spotify;
        this.artista = {};
        this.toptracks = {};
        this.router.params.subscribe(function (params) {
            _this.getartista(params['id']);
            _this.gettoptracks(params['id']);
        });
    }
    ArtistaComponent.prototype.getartista = function (id) {
        var _this = this;
        this.spotify.getartista(id)
            .subscribe(function (artista) {
            console.log(artista);
            _this.artista = artista;
        });
    };
    ArtistaComponent.prototype.gettoptracks = function (id) {
        var _this = this;
        this.spotify.gettoptracks(id)
            .subscribe(function (toptracks) {
            console.log(toptracks);
            _this.toptracks = toptracks;
        });
    };
    ArtistaComponent = __decorate([
        core_1.Component({
            selector: 'app-artista',
            templateUrl: './artista.component.html',
            styleUrls: ['./artista.component.css']
        })
    ], ArtistaComponent);
    return ArtistaComponent;
}());
exports.ArtistaComponent = ArtistaComponent;
