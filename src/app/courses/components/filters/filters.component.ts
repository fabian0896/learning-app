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
  selection: string | null =  null;

  options = CATEGORIES;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.select = new FormControl('developer');

    this.select.registerOnChange(() => {
      console.log('cambieee');
    })

    route.queryParams.subscribe((params) => {
      const category =  params['category'];
      if (!category) {
        this.selection = null;
        return;
      }
      this.selection = category;
    });
  }

  ngOnInit(): void {
  }

  selectCategory(category: string | null) {
    if (category === this.selection) {
      category = null;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category,
      }
    });
  }

}
