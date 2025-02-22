import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);  // Get whole hours
    const minutes = value % 60;            // Get remaining minutes
    return `${hours}h ${minutes}m`;        // Format as "Xh Ym"
  }

}
