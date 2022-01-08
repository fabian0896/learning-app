import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseResolver } from '../core/resolvers/course.resolver';
import { CoursesResolver } from '../core/resolvers/courses.resolver';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: {
      courses: CoursesResolver,
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: ':id',
    component: CoursesDetailsComponent,
    resolve: {
      course: CourseResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
