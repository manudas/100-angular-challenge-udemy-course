import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true // DEFAULT IS TRUE, JUST HIGHLIGHTING THAT DEFAULT PIPES ARE PURE
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, lenght: number = 100, suffix: string = '...'): string {
    return `${value.slice(0, lenght)}${value.length > lenght ? suffix : ''}`;
  }
}
