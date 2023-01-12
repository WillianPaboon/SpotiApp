import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas:any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { 
    this.loading = false;}

  Buscar(termino: string){

    this.loading = true;
    this.spotify.getArtistas(termino)
          .subscribe( (data:any) => {
            this.artistas = data;
            this.loading = false;
          });
  }

}
