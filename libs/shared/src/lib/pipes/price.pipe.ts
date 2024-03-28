import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'price',
})
export class PricePipe implements PipeTransform {
  public transform(value: number): string {
    return value.toLocaleString('cs') + ' kč';
  }
}
