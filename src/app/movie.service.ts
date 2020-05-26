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
  popularUrl: string = "https://api.themoviedb.org/3/movie/popular";

  favoriteMovies: any = [];

  constructor(private http: HttpClient) { }

  // setter
  addFavorite(movie: any): void {
    this.favoriteMovies.push(movie);
    console.log(this.favoriteMovies)
  }

  // getter
  getFavorites() {
    return this.favoriteMovies;
  }

  removeFavorite(movie: any): void {
    this.favoriteMovies.splice(movie, 1);
  }


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

  getPopularMovies(): any {
    return this.http.get(this.popularUrl, {
      params: {
        api_key: this.apiKey
      }
    })
  }
}
