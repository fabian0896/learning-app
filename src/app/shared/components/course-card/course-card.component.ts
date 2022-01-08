import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-card[course]',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  constructor() {

   }

  ngOnInit(): void {
  }

}
