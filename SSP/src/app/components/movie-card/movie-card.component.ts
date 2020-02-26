import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() public movieTitle: string = '';
  @Input() public backgroundPath: string = '';
  @Input() public movieId: number;

  constructor(private router: Router) { }

  getPosterUrl(): string {
    return `url(https://image.tmdb.org/t/p/w300/${this.backgroundPath}) no-repeat`;
  }

  goToFilmDetails(id: number): void {
    this.router.navigate([`/movie/${id}`]);
  }

}
