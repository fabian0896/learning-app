import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    CategoryPipe,
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
  ]
})
export class SharedModule { }
