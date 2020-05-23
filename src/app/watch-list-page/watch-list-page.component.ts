import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {
  favList: any;
  constructor() { }

  ngOnInit(): void {
  }

  addedList(favListFromChild) {
    this.favList = favListFromChild;
    console.log(this.favList);
  }

}
