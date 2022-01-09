import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator[activePage][totalPages]',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() activePage!: number;
  @Input() totalPages!: number[];
}
