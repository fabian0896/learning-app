import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

import { faClock, faSignal, faPlay, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-resume[course]',
  templateUrl: './course-resume.component.html',
  styleUrls: ['./course-resume.component.scss']
})
export class CourseResumeComponent implements OnInit {
  @Input() course!: Course;
  clockIcon = faClock;
  bookIcon = faBook;
  playIcon = faPlay;
  levelIcon = faSignal;

  constructor() { }

  ngOnInit(): void {
  }

}
