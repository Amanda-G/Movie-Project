import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

//@Input allows child to access data
export class MovieListComponent implements OnInit {
  @Input() movieRef: any;

  constructor() { }

  ngOnInit(): void {
  }

}
