import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from 'src/app/models/course';

import { faUsers, faStar, faCalendar, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  course: Course;

  usersIcon = faUsers;
  starIcont = faStar;
  calendarIcon = faCalendar;
  checkIcon = faCheck;

  constructor(
    private active: ActivatedRoute,
  ) {
    this.course = <Course>this.active.snapshot.data['course'];
  }

  ngOnInit(): void {
  }

}
