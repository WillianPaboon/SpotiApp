import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKaVGHivKfAiWCrLjyVmpoj5rNYDp5dj9WvyZaWc02VRTE5VjOo0SYCPk0JZ7MCjNsNQ9as_6AyWhrAhlTs4K6i0EULQiOhg_KN6dDR065KoMdmq0'
    });
    return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery(`browse/new-releases`)
                  .pipe(map((data:any) => data.albums.items
                  ));
  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=50`)
                .pipe(map((data:any) =>  data.artists.items
    ));
  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=US`)
                .pipe(map((data:any) => data['tracks']));
  }
}
