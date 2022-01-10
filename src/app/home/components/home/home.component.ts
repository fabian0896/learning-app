import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, CoursesResponse } from 'src/app/models/course';
import SwiperCore, { Navigation, Pagination, SwiperOptions  } from 'swiper';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CATEGORIES } from 'src/app/utils/consts';

SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  courses: Course[];

  arrowNextIcon = faChevronRight;
  arrowPrevIcon = faChevronLeft;

  categories = CATEGORIES;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.next-arr',
      prevEl: '.pre-arr',
    },
    breakpoints: {
      '576': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
      '1400': {
        slidesPerView: 4,
      },
    }
  }

  constructor(
    private route: ActivatedRoute,
  ) {
    const response = this.route.snapshot.data['courses'] as CoursesResponse;
    this.courses = response.results;
  }
}
