import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newSings: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = '';

  constructor( private spotifyService: SpotifyService, ) {
    this.loading = true;
    this.error=false;
    this.spotifyService.getNewReleases()
    .subscribe( (data:any) => {
      console.log(data);
      this.newSings = data;
      this.loading = false;
    },(errorService)=>{
      this.error = true;
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
      console.log(errorService);
    });
   }

}
