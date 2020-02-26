import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

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
}
