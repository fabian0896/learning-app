import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesSeconds'
})
export class MinutesSecondsPipe implements PipeTransform {

  transform(seconds: number): string {
    const minutes = ~~(seconds / 60)
    seconds -= (minutes * 60)
    return `${String(minutes).padStart(2, '00')}:${String(seconds).padStart(2, '00')}`;
  }

}
