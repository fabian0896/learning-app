import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap, Observable } from 'rxjs';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> | undefined;
  totalPages: number[] = [1];
  activePage: number = 1;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) {
    this.courses$ = this.route.queryParams.pipe(
      mergeMap(params => {
        const page: string = params['page'] ?? '1';
        return this.courseService.getAll(page);
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
    let start = page - 2;
    if (page + 2 > total) start =  total - 4;
    if (page - 2 <= 1) start = 1;
    return Array.from({ length: 5 }, (_, i) => start + i);
  }

  ngOnInit(): void {
    console.log('inicie el componente')
  }

}
