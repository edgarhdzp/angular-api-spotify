import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artista: any = {};
  toptracks: any = {};

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getartista( params['id'] );
      this.gettoptracks( params['id'] );

    });
  }

  getartista( id: string){

    this.spotify.getartista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
      });
    }
    gettoptracks(id: string) {
      this.spotify.gettoptracks(id)
      .subscribe(toptracks => {
        console.log(toptracks);
        this.toptracks = toptracks;
      });
    }
  }



