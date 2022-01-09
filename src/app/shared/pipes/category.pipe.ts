import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/models/course';
import { CATEGORIES } from 'src/app/utils/consts';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category): string {
    const cat = CATEGORIES.find(c => c.value === value)?.name;
    return cat ?? '';
  }

}
