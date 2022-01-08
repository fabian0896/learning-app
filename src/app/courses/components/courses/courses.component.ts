import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, CoursesResponse } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  totalPages: number[];
  activePage: number;

  constructor(
    private route: ActivatedRoute
  ) {
    const { results, totalPages, page } = this.route.snapshot.data['courses'] as CoursesResponse;
    this.courses = results;
    this.totalPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    this.activePage = page;
  }

  ngOnInit(): void {
    console.log('inicie el componente')
  }

}
