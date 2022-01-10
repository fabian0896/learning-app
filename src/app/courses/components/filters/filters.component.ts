import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { FormControl } from '@angular/forms';

import { CATEGORIES } from 'src/app/utils/consts';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  squareIcon = faSquare;
  checkIcon = faCheckSquare;
  select: FormControl;
  lastSelect: string = '';
  options = CATEGORIES;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.select = new FormControl('');

    route.queryParams.subscribe((params) => {
      const category =  params['category'];
      if (!category) {
        this.select.setValue('');
        this.lastSelect = '';
        return;
      }
      this.select.setValue(category);
      this.lastSelect = category;
    });
  }

  ngOnInit(): void {
  }



  change() {
    this.selectCategory(this.select.value);
  }

  selectCategory(category: string | null) {
    if (category === this.lastSelect || !category) {
      category = null;
      this.select.setValue('');
      this.lastSelect = '';
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category,
      }
    });
  }

}
