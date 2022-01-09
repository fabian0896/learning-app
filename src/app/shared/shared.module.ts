import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryPipe } from './pipes/category.pipe';
import { CategoryImageComponent } from './components/category-image/category-image.component';
import { CourseHoursPipe } from './pipes/course-hours.pipe';
import { CourseClassesPipe } from './pipes/course-classes.pipe';
import { MinutesSecondsPipe } from './pipes/hour-seconds.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    CategoryPipe,
    CategoryImageComponent,
    CourseHoursPipe,
    CourseClassesPipe,
    MinutesSecondsPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    CategoryPipe,
    CategoryImageComponent,
    CourseHoursPipe,
    CourseClassesPipe,
    MinutesSecondsPipe
  ]
})
export class SharedModule { }
