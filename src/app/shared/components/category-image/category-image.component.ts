import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from 'src/app/models/course';
import { faClock, faSignal, faPlay, faBook, faEye } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-category-image[course]',
  templateUrl: './category-image.component.html',
  styleUrls: ['./category-image.component.scss']
})
export class CategoryImageComponent implements OnInit {
  @Input() course!: Course;
  @Input() dense: boolean | undefined;
  @Input() showInfo: boolean | undefined;
  @Input() showLimitDate: boolean | undefined;
  @Input() showSeen!: boolean;

  seen: boolean = false;

  clockIcon = faClock;
  bookIcon = faBook;
  playIcon = faPlay;
  levelIcon = faSignal;
  eyeIcon = faEye;

  constructor(
    private localStorageServeice: LocalStorageService,
  ) {

  }

  ngOnInit(): void {
    this.seen = this.localStorageServeice.isSeen(this.course.id);
  }

}
