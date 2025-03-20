import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  { path: 'add', component: AddStudentComponent },
  { path: 'list', component: StudentListComponent },
  {path:'student', component:StudentComponent} ,
  { path: '', redirectTo: 'student', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
