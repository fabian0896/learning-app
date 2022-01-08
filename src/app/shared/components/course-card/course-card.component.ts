import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card[course]',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  userIcon = faUsers;
  startIcon = faStar;

  constructor() {

   }

  ngOnInit(): void {
  }

}
