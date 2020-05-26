import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {
  favList: any;
  show: boolean = false;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.favList = this.service.getFavorites();
  }

  onDelete(index: number): void {
    this.favList.splice(index, 1)
  }

  toggleDetails(): void {
    this.show = !this.show;
  }

}
