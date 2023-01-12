import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newSings: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService, ) {
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe( (data:any) => {
      console.log(data);
      this.newSings = data;
      this.loading = false;
    });
   }

}
