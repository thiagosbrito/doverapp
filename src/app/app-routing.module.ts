import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent, ProductsListComponent } from './views';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/list',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: 'list',
        component: ProductsListComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
