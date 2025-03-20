import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'university',
        loadChildren: () => import('./university/university.module').then(m => m.UniversityModule)
      },
      { path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
      {
        path:'',redirectTo:'university',pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityManagementRoutingModule { }
