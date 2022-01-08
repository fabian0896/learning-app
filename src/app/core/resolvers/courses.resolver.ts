import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesResponse } from 'src/app/models/course';
import { CourseService } from '../services/course.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<CoursesResponse> {

  constructor(
    private courseService: CourseService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CoursesResponse> {
    const page = route.queryParamMap.get('page') ?? '1';
    const categories = route.queryParamMap.getAll('category');
    console.log(page, categories);

    return this.courseService.getAll(page);
  }
}
