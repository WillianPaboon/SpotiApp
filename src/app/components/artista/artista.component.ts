import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista:any = {}
  topTracks:any = []

  loading:boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;

    this.activatedRoute.params.subscribe(params =>{
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
    })
  }
  
  getArtista(id:string)
  {
    this.spotify.getArtista(id).
                subscribe(artista => {
                  this.artista = artista;
                  this.loading = false;
                });
  }

  getTopTracks(id:string)
  {
    this.spotify.getTopTracks(id).
                subscribe(toptracks => {
                  console.log(toptracks);
                  this.topTracks = toptracks;
                });
  }

}
