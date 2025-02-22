import { MoviesService } from './services/movies.service';
import { Component, OnInit } from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {Movie} from './model/movie.model';


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent
  ]
})
export class AppComponent implements OnInit{

  moviesSignal = signal<Movie[]>([]); // Initialize a signal to hold movies

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // Retrieve movies from the service
    this.moviesService.getAllMovies().subscribe(movies => {
      this.moviesSignal.set(movies); // Set the retrieved movies to the signal
    });
  }

  // movie: Movie =  {
  //   "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
  //   "title": "Harry Potter and the Philosopher's Stone",
  //   "duration": 152,
  //   "budget": 125,
  //   "release_date": "2001-11-04"
  // };
}
