// custom-uppercase.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class uppercasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = true): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
