import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../model/movie.model';
import { DurationPipe } from '../duration.pipe';


@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>{{ movie.title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie.release_date }}</span>
          <span>Budget: {{ movie.budget | currency:'USD':true }} million</span>
          <span>Duration: {{ movie.duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: [ 'movie-item.component.scss' ],
  imports: [CommonModule]
})
export class MovieItemComponent {
  @Input() movie!: Movie;  // Required input of type Movie
}

