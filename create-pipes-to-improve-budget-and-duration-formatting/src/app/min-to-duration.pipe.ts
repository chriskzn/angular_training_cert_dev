import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToDuration'
})
export class MinToDurationPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string): string {
    if (!value) return '';

    const totalMinutes = parseInt(value, 10);

    // Calculate hours and remaining minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Return the formatted string
    return `${hours}h ${minutes}min`;
  }

}
