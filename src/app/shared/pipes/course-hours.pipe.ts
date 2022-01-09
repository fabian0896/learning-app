import { Pipe, PipeTransform } from '@angular/core';
import { Content } from 'src/app/models/course';

@Pipe({
  name: 'courseHours'
})
export class CourseHoursPipe implements PipeTransform {

  transform(value: Content[]): string {
    const totalSeconds = value.reduce((sum, module) => {
      const seconds = module.lessons.reduce((s, l) => s + l, 0);
      return sum + seconds;
    }, 0);

    return (totalSeconds / (60 * 60)).toFixed(1);
  }

}
