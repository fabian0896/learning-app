import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  course: Course;
  constructor(
    private active: ActivatedRoute,
  ) {
    this.course = <Course>this.active.snapshot.data['course'];
  }

  ngOnInit(): void {
  }

}
