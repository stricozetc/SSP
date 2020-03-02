import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchedMovies: any[] = [];
  public isSearchListShown: boolean = false;
  public counterFavoriteMovies: number = 0;
  constructor(
    private router: Router,
    private movieService: MoviesService,
  ) { }

  public ngOnInit(): void {
    this.movieService.countFavoriteMovies.subscribe(value => {
      this.counterFavoriteMovies = this.movieService.countFavoriteMovies.value;
    });
  }

  public goToMovies(): void {
    this.router.navigate(['/']);
  }

  public goToFavorites(): void {
    this.router.navigate(['/favorites']);
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
