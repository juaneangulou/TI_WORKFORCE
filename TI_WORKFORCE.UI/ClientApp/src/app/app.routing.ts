import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './common-components/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './common-components/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard-admin',
        loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule'
      },      
    ]
  },
  {
    path: 'pages',
    component: UserLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
