import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';


const routes: Routes = [
  { path: '', component: MoviesPageComponent },
  { path: 'movie/:id', component: MoviePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
