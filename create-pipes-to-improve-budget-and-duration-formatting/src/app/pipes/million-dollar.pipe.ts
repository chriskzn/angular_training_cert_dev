import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar',
  standalone: true
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return null;
  }

  // Check if the value contains a range (i.e., it has a hyphen '-')
  // if (value.includes('-')) {
  //   const [start, end] = value.split('-').map(num => parseInt(num, 10));
  //   return `$${start} to $${end} million`;
  // } else {
  //   const budget = parseInt(value, 10);
  //   return `$${budget} million`;
  // }
}
