import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AddUniversityComponent } from './add-university/add-university.component';
// import { UniversityListComponent } from './university-list/university-list.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityComponent } from './university/university.component';
import { UniversityRoutingModule } from './university-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    UniversityRoutingModule,
    RouterModule,
    UniversityComponent,
    AddUniversityComponent,
    UniversityListComponent
  ]
})
export class UniversityModule { }
