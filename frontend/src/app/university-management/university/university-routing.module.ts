import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  { path: 'add', component: AddUniversityComponent },
  { path: 'list', component: UniversityListComponent },
  {path :'university', component: UniversityComponent},
  { path: '', redirectTo: 'university', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
