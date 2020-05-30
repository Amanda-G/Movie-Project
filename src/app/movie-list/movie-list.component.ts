import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

//@Input allows child to access data
export class MovieListComponent implements OnInit {
  @Input() movieList: any;
  showIndex: number = null;
  favList: any = [];
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {

    this.favList = this.service.getFavorites();
    this.addProperty();


  }



  added(movie: any) {
    if (this.checkDuplicate(movie)) {
      movie.isFavorite = false;
      this.service.removeFavorite(movie);
    } else {
      movie.isFavorite = true;
      this.service.addFavorite(movie);
    }

  }

  showDetails(index: number): void {
    this.showIndex = index;
  }

  hideDetails() {
    this.showIndex = null;
  }

  checkDuplicate(movie: any): boolean {
    return this.favList.some((item) => {
      return item.id === movie.id;
    })
  }

  addProperty(): void {
    this.movieList.forEach(movie => {
      if (this.checkDuplicate(movie)) {
        movie.isFavorite = true
      }
    })
  }


}
