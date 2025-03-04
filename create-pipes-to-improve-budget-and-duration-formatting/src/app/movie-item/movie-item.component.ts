import {Component, input} from '@angular/core';
import { Movie } from '../model/movie.model';
import { Pipe } from '../pipes/million-dollar.pipe';
import { Pipe } from '../pipes/minutes-to-duration.pipe';


@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>{{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget: $ {{ movie().budget }} million</span>
          <span>Duration: {{ movie().duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: [ 'movie-item.component.scss' ]
})
export class MovieItemComponent {
  movie  = input.required<Movie>();
}

