import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassesComponent } from './components/classes/classes.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent,
    PaginatorComponent,
    FiltersComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
