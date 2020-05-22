import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  data: any;
  genre: any;

  constructor(private service: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.service.getGenre().subscribe(response => {
      this.genre = response;
    });
  }

  onSubmit(form: NgForm) {
    this.router.navigate(["search"], {
      queryParams: { genre: form.value.genre, rating: form.value.rating, release: form.value.release }
    });
  }


}
