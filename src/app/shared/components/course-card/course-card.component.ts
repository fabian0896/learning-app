import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

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
  clockIcon = faClock;

  seen: boolean;

  constructor(
    private localStorageService: LocalStorageService,
  ) {
    this.seen = this.localStorageService.isSeen(this.course?.id);
  }

  ngOnInit(): void {
  }

}
