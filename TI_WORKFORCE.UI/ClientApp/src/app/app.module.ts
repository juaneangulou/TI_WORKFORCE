
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AdminLayoutComponent } from './common-components/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './common-components/user-layout/user-layout.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserLayoutContainerComponent } from './common-components/user-layout-container/user-layout-container.component';
import { PagesModule } from './pages/pages.module';
import { HeaderTopComponent } from './common-components/headers/header-top/header-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    UserLayoutContainerComponent,  
    HeaderTopComponent  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),

    RouterModule.forRoot([]),    
    PagesModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
