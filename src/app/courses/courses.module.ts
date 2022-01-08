import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
  ]
})
export class CoursesModule { }
