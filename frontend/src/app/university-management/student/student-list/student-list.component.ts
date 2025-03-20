import { StudentService } from './../../../service/student/student.service';
import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';



interface Student {
  id: number;
  name: string;
  registration: number;
}
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}
