import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getquery(query: string){
    const url =`https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCishvP0xQSpNzea_SN6FnqSG2jK1pzj9iziS-xexDHPEOCnTmObnf6_BSBZwE_6fPkF0QS_NT1yhvxGrs'
    });
    return this.http.get(url, {headers});
  }


getnewreleases() {

    return this.getquery('browse/new-releases?country=MX&offset=0&limit=6')
      .pipe(map(data => data['albums'].items));
}

getartistas(termino:string){
  return this.getquery(`search?q=${termino}&type=artist&limit=12`)
    .pipe(map(data => data['artists'].items));
}

  getartista(id:string){
    return this.getquery(`artists/${ id }`);
      //.pipe(map(data => data['artists'].items));
  }
  gettoptracks(id:string){
    return this.getquery(`artists/${ id }/top-tracks?country=mx`)
      .pipe(map(data => data['tracks']));
  }
}
