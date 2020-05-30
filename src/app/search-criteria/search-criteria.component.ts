import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  data: any;
  genre: any;
  favList: any = [];

  constructor(private service: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getGenre().subscribe(response => {
      this.genre = response;
    });

    this.route.queryParams.subscribe(response => {
      if (response.release || response.rating || response.genre) {
        this.service.getData(response.release, response.rating, response.genre).subscribe(movieResponse => {
          this.data = movieResponse.results;
        });
      } else {
        this.service.getPopularMovies().subscribe(response => {
          this.data = response.results;
        })
      }
    });
  }

  onSubmit(form: NgForm) {
    this.router.navigate(["search"], {
      queryParams: { genre: form.value.genre, rating: form.value.rating, release: form.value.release }
    });
  }

  getFavList() {
    this.favList = this.service.getFavorites();
  }




}
