import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from '../services/course.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<Course[]> {

  constructor(
    private courseService: CourseService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> {
    const page = route.queryParamMap.get('page');
    const categories = route.queryParamMap.getAll('category');
    console.log(page, categories);

    return this.courseService.getAll();
  }
}
