import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {
      this.courses$ = this.courseService.getAll();
   }
}
