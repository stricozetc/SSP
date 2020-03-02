import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public countFavoriteMovies: BehaviorSubject<number> = new BehaviorSubject(JSON.parse(localStorage.getItem('movieArray')).length);
  constructor(private http: HttpClient) { }

  getMovieList(page: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=8499fef6a795af7cd4eafae996227a97&language=en-US&page=${page}`);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8499fef6a795af7cd4eafae996227a97&language=en-US&page=1`);
  }

  searchMovie(movieName: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=8499fef6a795af7cd4eafae996227a97&query=${movieName}`);
  }

  incrementCounterFavoriteMovies(): void {
    this.countFavoriteMovies.next(JSON.parse(localStorage.getItem('movieArray')).length++);
  }

  decrementCounterFavoriteMovies(): void {
    if (JSON.parse(localStorage.getItem('movieArray')).length === 0) {
      this.countFavoriteMovies.next(0);
    } else {
      this.countFavoriteMovies.next(JSON.parse(localStorage.getItem('movieArray')).length--);
    }
  }
}
