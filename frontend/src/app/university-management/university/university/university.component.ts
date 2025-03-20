import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { AddUniversityComponent } from '../add-university/add-university.component';
import { UniversityListComponent } from '../university-list/university-list.component';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-university',
  standalone: true,
  imports: [CommonModule,MatButtonToggleModule,MatIconModule,AddUniversityComponent,UniversityListComponent,MatButtonModule,],
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss'
})
export class UniversityComponent {
  showAdd = true;  // Default: Show Add University
  showList = true; // Default: Show University List

  showAddUniversity() {
    this.showAdd = true;
    this.showList = false;
  }

  showUniversityList() {
    this.showAdd = false;
    this.showList = true;
  }
  showBoth(){
    this.showAdd = true;  // Default: Show Add University
    this.showList = true; // Default: Show University List
  }

  // navigation handeling
  constructor(private router: Router) {}

  navigateToTarget() {
    this.router.navigate(['/university-management/student/']);

  }

}
