import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
  @Input() public options: any[] = [];
  constructor(private router: Router) { }

  public getPosterUrl(posterPath: string): string {
    return `url(https://image.tmdb.org/t/p/w92${posterPath}) no-repeat`;
  }

  public goToFilmDetails(id: number): void {
    this.router.navigate([`/movie/${id}`]);
  }
}
