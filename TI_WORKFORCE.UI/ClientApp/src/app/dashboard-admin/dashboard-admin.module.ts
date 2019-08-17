import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DashboardAdminRouting } from './dashboard-admin.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardAdminRouting
  ],
  declarations: [HomeAdminComponent]
})
export class DashboardAdminModule { }
