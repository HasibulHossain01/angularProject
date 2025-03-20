import { UniversityService } from './../../../service/university/university.service';
import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';



interface University {
  id: number;
  name: string;
  ranking: number;
}
@Component({
  selector: 'app-university-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './university-list.component.html',
  styleUrl: './university-list.component.scss'
})
export class UniversityListComponent {
  universities: University[] = [];

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universityService.getUniversities().subscribe(data => {
      this.universities = data;
    });
  }
}
