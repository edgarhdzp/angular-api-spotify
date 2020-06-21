import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

nuevascanciones: any [] = [];

  constructor( private spotify: SpotifyService) {

    this.spotify.getnewreleases()
      .subscribe((data:any) => {
        this.nuevascanciones = data;
      });
  }



}
