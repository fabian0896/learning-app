import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { faClock, faSignal, faPlay, faBook } from '@fortawesome/free-solid-svg-icons';

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

  clockIcon = faClock;
  bookIcon = faBook;
  playIcon = faPlay;
  levelIcon = faSignal;

  constructor() { }

  ngOnInit(): void {
  }

}
