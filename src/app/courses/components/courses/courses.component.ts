import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap, Observable } from 'rxjs';
import { CourseService } from 'src/app/core/services/course.service';
import { Category, Course } from 'src/app/models/course';
import { CATEGORIES } from 'src/app/utils/consts';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> | undefined;
  totalPages: number[] = [1];
  activePage: number = 1;
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) {
    this.courses$ = this.route.queryParams.pipe(
      mergeMap(params => {
        const page: string = params['page'] ?? '1';
        const category = params['category'];
        this.category = category;
        return this.courseService.getAll(page, category);
      }),
      tap(({ totalPages, page })  => {
        this.totalPages = this.getPages(page, totalPages);
        this.activePage = page;
        // window.scroll(0, 0);
      }),
      map(({ results }) => results),
    );
  }

  getPages(page: number, total: number) {
    let length = 5;
    if (total < length) length = total;
    let start = page - 2;
    if (page + 2 > total) start =  total - (length - 1);
    if (page - 2 <= 1) start = 1;
    return Array.from({ length }, (_, i) => start + i);
  }

  ngOnInit(): void {
    console.log('inicie el componente')
  }

}
