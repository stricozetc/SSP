import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

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
  public movieId: number;
  public isMovieInFavorites: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.route.params.subscribe(params => {
      this.movieId = params.id;
    });
  }

  ngOnInit() {
    this.checkMovieInDB();
  }

  checkMovieInDB(): void {
    const movieArray = JSON.parse(localStorage.getItem('movieArray'));
    this.isMovieInFavorites.subscribe();
    if (movieArray && movieArray.length !== 0) {
      const isMovieExist = movieArray.findIndex(element => {
        return element.id === this.movieId;
      });
      if (isMovieExist !== -1) {
        this.isMovieInFavorites.next(true);
      } else {
        this.isMovieInFavorites.next(false);
      }
    } else {
      this.isMovieInFavorites.next(false);
    }
  }

  public getPosterUrl(): string {
    return `url(https://image.tmdb.org/t/p/w300${this.posterPath}) no-repeat`;
  }

  public addToFavorites(): void {
    const movieCard = {
      title: this.title,
      description: this.description,
      poster_path: this.posterPath,
      id: this.movieId,
    };
    const movieArrayFormLS = JSON.parse(localStorage.getItem('movieArray'));
    if (!movieArrayFormLS) {
      localStorage.setItem('movieArray', JSON.stringify([]));
    }
    const newArr = JSON.parse(localStorage.getItem('movieArray'));
    newArr.push(movieCard);
    localStorage.setItem('movieArray', JSON.stringify(newArr));
    this.checkMovieInDB();
    this.movieService.incrementCounterFavoriteMovies();
  }

  public removeFromFavorites(): void {
    let movieArray = JSON.parse(localStorage.getItem('movieArray'));
    function removeElementByName(arr, id) {
      return arr.filter(e => e.id !== id);
    }
    movieArray = removeElementByName(movieArray, this.movieId);
    localStorage.setItem('movieArray', JSON.stringify(movieArray));
    this.checkMovieInDB();
    this.movieService.decrementCounterFavoriteMovies();
  }

}
