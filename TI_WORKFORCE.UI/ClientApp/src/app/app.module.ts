
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ResourceComponent } from './pages/resource/resource.component';
import { HeaderComponent } from './common-components/header/header.component';
import { NavMenuComponent } from './common-components/nav-menu/nav-menu.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { TimeQueryComponent } from './pages/time-query/time-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourceComponent,
    HeaderComponent,  
    NavMenuComponent, TimesheetComponent, TimeQueryComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),

    AppRoutingModule,
        NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
