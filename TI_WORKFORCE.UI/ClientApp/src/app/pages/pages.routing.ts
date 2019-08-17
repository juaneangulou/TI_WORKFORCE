import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { DevelopsComponent } from './develops/develops.component';
import { UserLayoutComponent } from '../common-components/user-layout/user-layout.component';


const routes: Routes = [
  
  {
    path: 'pages',
    component:UserLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'develops',
        component: DevelopsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
