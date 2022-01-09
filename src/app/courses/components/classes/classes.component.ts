import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/course';

import { faBook, faClock, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classes[classes]',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  @Input() classes!: Content[]

  selected = 0;

  bookIcon = faBook;
  clockIcon = faClock;
  playIcon = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

  changeSelected(index: number) {
    this.selected = index;
  }

}
