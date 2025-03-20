import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { StudentRoutingModule } from './student-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
  ]
})
export class StudentModule { }
