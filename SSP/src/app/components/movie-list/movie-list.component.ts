import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public cards: any[] = [];
  public currentPage: number = 1;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const height = scrollHeight - clientHeight;
    const scrollTop = window.pageYOffset;
    if (height === scrollTop) {
      this.currentPage++;
      this.getMovies(this.currentPage);
    }
  }
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getMovies(1);
  }

  getMovies(page: number) {
    this.movieService.getMovieList(page).subscribe(item => {
      item.results.forEach(element => {
        this.cards.push(element);
      });
    });
  }

}
