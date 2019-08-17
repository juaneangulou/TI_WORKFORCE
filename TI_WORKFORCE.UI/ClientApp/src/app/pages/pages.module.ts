import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from '../common-components/headers/header-navbar/header-navbar.component';
import { SliderTopComponent } from '../common-components/slider-top/slider-top.component';
import { CardServicesComponent } from '../common-components/card-services/card-services.component';
import { CardProductsComponent } from '../common-components/card-products/card-products.component';
import { FooterComponent } from '../common-components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { DevelopsComponent } from './develops/develops.component';
import { PagesRoutingModule } from './pages.routing';
import { HeaderMiddleComponent } from '../common-components/headers/header-middle/header-middle.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [ HeaderNavbarComponent, SliderTopComponent, CardServicesComponent, CardProductsComponent, FooterComponent, HomeComponent, ProductsComponent, ServicesComponent, DevelopsComponent, HeaderMiddleComponent],
})
export class PagesModule { }
