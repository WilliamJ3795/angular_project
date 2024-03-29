import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseStartComponent } from './courses/course-start/course-start.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { TruncatePipe } from './shared/truncate.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { OrderByPipe } from './shared/order-by.pipe';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    CourseDetailComponent,
    CourseListComponent,
    CourseStartComponent,
    CourseItemComponent,
    TruncatePipe,
    FilterPipe,
    OrderByPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
