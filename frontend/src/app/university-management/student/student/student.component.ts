import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentListComponent } from '../student-list/student-list.component';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule,MatButtonToggleModule,MatIconModule,AddStudentComponent,StudentListComponent,MatButtonModule,],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  showAdd = true;
  showList = true;

  showAddStudent() {
    this.showAdd = true;
    this.showList = false;
  }

  showStudentList() {
    this.showAdd = false;
    this.showList = true;
  }
  showBoth(){
    this.showAdd = true;
    this.showList = true;
  }

  // navigation handeling
  constructor(private router: Router) {}

  navigateToTarget() {
    this.router.navigate(['/university-management/university/']);

  }

}
