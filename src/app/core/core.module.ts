import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { CourseResolver } from './resolvers/course.resolver';
import { CoursesResolver } from './resolvers/courses.resolver';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    CourseService,
    CourseResolver,
    CoursesResolver,
  ],
  exports: []
})
export class CoreModule { }
