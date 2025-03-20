import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'university-management',
    loadChildren: () => import('./university-management/university-management.module').then(m => m.UniversityManagementModule)
  },

  { path: '', redirectTo: 'university-management', pathMatch: 'full' },
  { path: '**', redirectTo: 'university-management' }
];
