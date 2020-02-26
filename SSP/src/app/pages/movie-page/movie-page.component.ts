import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {
  public movieSub: Subscription;
  public movieId: number;
  public title: string;
  public overview: string;
  public posterPath: string;
  public rate: number;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {
    this.movieSub = this.route.params.subscribe(params => {
      this.movieId = params.id;
      this.getMovieDetails(params.id);
    });
  }

  ngOnInit() {
    this.getMovieDetails(this.movieId);
  }

  getMovieDetails(id: number) {
    this.movieService.getMovieById(id).subscribe(item => {
      this.title = item.title;
      this.overview = item.overview;
      this.posterPath = item.poster_path;
      this.rate = item.vote_average;
    });
  }

  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }

}
