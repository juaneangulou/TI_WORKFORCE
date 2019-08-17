import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { TimeQueryComponent } from './pages/time-query/time-query.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/resources',
    pathMatch: 'full',
  },
  {
    path: 'resources',
    component: ResourceComponent,   
  },
  {
    path: 'timesheet',
    component: TimesheetComponent,   
  },
  {
    path: 'timesheet-queries',
    component: TimeQueryComponent,   
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
