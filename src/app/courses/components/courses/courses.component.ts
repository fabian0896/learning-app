import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(
    private route: ActivatedRoute
  ) {
    this.courses = this.route.snapshot.data['courses'] as Course[];
  }

  ngOnInit(): void {
  }

}
