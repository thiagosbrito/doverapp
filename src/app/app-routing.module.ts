import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsSearchComponent, ProductDetailsComponent } from './views';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/search',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: 'search',
        component: ProductsSearchComponent
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
