import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  plusIcon = faPlus;
  checkIcon = faCheck;

  selection: string | null =  null;

  options = [
    { name: 'Programacion', value: 'development' },
    { name: 'Desarrollo Personal', value: 'personal' },
    { name: 'Fotografia', value: 'photography' },
    { name: 'Negocios', value: 'business' },
    { name: 'Marketing', value: 'marketing' },
    { name: 'Arte', value: 'art' },
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
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
