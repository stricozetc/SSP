import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public posterPath: string = '';
  @Input() public rate: number;
  constructor() { }

  ngOnInit() {
  }

  public getPosterUrl(): string {
    return `url(https://image.tmdb.org/t/p/w300${this.posterPath}) no-repeat`;
  }

}
