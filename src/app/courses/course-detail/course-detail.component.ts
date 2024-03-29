import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from '../../shared/course.model'; 
import { CourseService } from '../../shared/course.service'; 

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  
  course!: Course; 
  id!: number; 
  constructor(private courseService: CourseService, 
  private route: ActivatedRoute, 
  private router: Router) { 
  } 
  ngOnInit() { 
  this.route.params 
  .subscribe( 
  (params: Params) => { 
  this.id = +params['id']; 
  console.log(this.id) 
  this.course = this.courseService.getCourse(this.id); 
  } 
  ); 
  }
   
}
