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
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {


  }



  added(movie: any) {
    this.service.addFavorite(movie);
  }

  showDetails(index: number): void {
    this.showIndex = index;
  }

  hideDetails() {
    this.showIndex = null;
  }

}
