import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = "https://api.themoviedb.org/3/discover/movie";
  genreUrl: string = "https://api.themoviedb.org/3/genre/movie/list";
  apiKey: string = "695101759e1224bc97f92c3df2913774";
  defaultLanguage: string = "en-US";
  constructor(private http: HttpClient) { }


  getData(displayYear: any, displayRating: any, displayGenre): any {
    console.log(displayYear, displayRating, displayGenre)
    return this.http.get(this.apiUrl, {
      params: {
        language: this.defaultLanguage,
        api_key: this.apiKey,
        primary_release_year: displayYear,
        vote_average: displayRating,
        with_genres: displayGenre
      }
    })
  }

  getGenre(): any {
    return this.http.get(this.genreUrl, {
      params: {
        api_key: this.apiKey,
      }
    })
  }


}
