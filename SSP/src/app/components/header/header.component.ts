import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchedMovies: any[] = [];
  public isSearchListShown: boolean = false;
  constructor(
    private router: Router,
    private movieService: MoviesService
  ) { }

  public goToMovies(): void {
    this.router.navigate(['/']);
  }

  public goToFavorites(): void {

  }

  public close(): void {
    this.isSearchListShown = false;
  }

  public focusEvent(): void {
    this.isSearchListShown = true;
  }

  public search(searchString): void {
    this.searchedMovies = [];
    this.movieService.searchMovie(searchString).subscribe(item => {
      item.results.forEach(element => {
        this.searchedMovies.push(element);
      });
    });
  }

}
