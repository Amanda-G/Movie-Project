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
  // @Input() movieRef: any;
  // @Output() addFav = new EventEmitter<any>();
  movieList: any;
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
    // console.log(this.movieRef)
    this.getMovies();

  }

  getMovies() {
    this.route.queryParams.subscribe(response => {
      console.log(response)
      this.service.getData(response.release, response.rating, response.genre).subscribe(movieResponse => {
        console.log(movieResponse)
        this.movieList = movieResponse;
      })
    });
  }

  addFavorite() {
    // this.addFav.emit()
  }

}
