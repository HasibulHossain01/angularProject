import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UniversityService } from '../../../service/university/university.service';
@Component({
  selector: 'app-add-university',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-university.component.html',
  styleUrl: './add-university.component.scss'
})
export class AddUniversityComponent {
  universityName: string = '';
  universityRanking: number | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private universityService: UniversityService) {}

  // Method to handle form submission
  onSubmit(): void {
    if (!this.universityName || this.universityRanking === null) {
      this.errorMessage = 'Please fill in both the name and ranking.';
      return;
    }

    const newUniversity = {
      name: this.universityName,
      ranking: this.universityRanking
    };

    // Call the addUniversity method from the service
    this.universityService.addUniversity(newUniversity).subscribe(
      (response) => {
        this.successMessage = 'University added successfully!';
        this.errorMessage = '';
        // Clear form
        this.universityName = '';
        this.universityRanking = null;
      },
      (error) => {
        this.errorMessage = 'There was an error adding the university.';
        this.successMessage = '';
      }
    );
  }
}
