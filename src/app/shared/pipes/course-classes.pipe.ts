import { Pipe, PipeTransform } from '@angular/core';
import { Content } from 'src/app/models/course';

@Pipe({
  name: 'courseClasses'
})
export class CourseClassesPipe implements PipeTransform {

  transform(value: Content[]): number {
    return value.reduce((sum, module) => {
      const classTotal = module.lessons.length;
      return sum + classTotal;
    }, 0);
  }

}
