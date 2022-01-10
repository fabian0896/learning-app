import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { CourseResolver } from './resolvers/course.resolver';
import { CoursesResolver } from './resolvers/courses.resolver';
import { LocalStorageService } from './services/local-storage.service';

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
    LocalStorageService,
  ],
  exports: []
})
export class CoreModule { }
