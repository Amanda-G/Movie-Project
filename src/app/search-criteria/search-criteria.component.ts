import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getData(2012, 6).subscribe(response => {
      console.log(response);
    })
  }

}
