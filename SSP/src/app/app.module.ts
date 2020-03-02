import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieInfoComponent,
    MoviesPageComponent,
    MoviePageComponent,
    ButtonComponent,
    InputComponent,
    SearchListComponent,
    ClickOutsideDirective,
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
