import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar'
})
export class MillionDollarPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string): string {
    if (!value) return '';

    // Check if the value contains a range (i.e., it has a hyphen '-')
    if (value.includes('-')) {
      const [start, end] = value.split('-').map(num => parseInt(num, 10));
      return `$${start} to $${end} million`;
    } else {
      const budget = parseInt(value, 10);
      return `$${budget} million`;
    }
  }

}
