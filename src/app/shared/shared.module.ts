import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseCardComponent
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
  ]
})
export class SharedModule { }
