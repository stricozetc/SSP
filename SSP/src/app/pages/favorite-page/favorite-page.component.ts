import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {
  public cards: any[] = [];
  constructor() { }

  ngOnInit() {
    this.getMoviesFormLS();
  }

  getMoviesFormLS(): void {
    this.cards = JSON.parse(localStorage.getItem('movieArray'));
  }

}
