import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Course, CoursesResponse } from 'src/app/models/course';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<CoursesResponse>(`${environment.apiUrl}/content`).pipe(
      map(response => response.results),
    );
  }

  getById(id: number) {
    return this.http.get<Course>(`${environment.apiUrl}/content/${id}`);
  }
}
