"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SpotifyService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.getquery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        var headers = new http_1.HttpHeaders({
            Authorization: 'Bearer BQCishvP0xQSpNzea_SN6FnqSG2jK1pzj9iziS-xexDHPEOCnTmObnf6_BSBZwE_6fPkF0QS_NT1yhvxGrs'
        });
        return this.http.get(url, { headers: headers });
    };
    SpotifyService.prototype.getnewreleases = function () {
        return this.getquery('browse/new-releases?country=MX&offset=0&limit=6')
            .pipe(operators_1.map(function (data) { return data['albums'].items; }));
    };
    SpotifyService.prototype.getartistas = function (termino) {
        return this.getquery("search?q=" + termino + "&type=artist&limit=12")
            .pipe(operators_1.map(function (data) { return data['artists'].items; }));
    };
    SpotifyService.prototype.getartista = function (id) {
        return this.getquery("artists/" + id);
        //.pipe(map(data => data['artists'].items));
    };
    SpotifyService.prototype.gettoptracks = function (id) {
        return this.getquery("artists/" + id + "/top-tracks?country=mx")
            .pipe(operators_1.map(function (data) { return data['tracks']; }));
    };
    SpotifyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
