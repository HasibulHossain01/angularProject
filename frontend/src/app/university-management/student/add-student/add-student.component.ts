import { StudentService } from './../../../service/student/student.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  studentName: string = '';
  studentRegistration: number | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private studentService: StudentService) {}

  // Method to handle form submission
  onSubmit(): void {
    if (!this.studentName || this.studentRegistration === null) {
      this.errorMessage = 'Please fill in both the name and ranking.';
      return;
    }

    const newStudent = {
      name: this.studentName,
      registration: this.studentRegistration
    };

    // Call the addUniversity method from the service
    this.studentService.addStudents(newStudent).subscribe(
      (response) => {
        this.successMessage = 'student added successfully!';
        this.errorMessage = '';
        // Clear form
        this.studentName = '';
        this.studentRegistration = null;
      },
      (error) => {
        this.errorMessage = 'There was an error adding the student.';
        this.successMessage = '';
      }
    );
  }
}
