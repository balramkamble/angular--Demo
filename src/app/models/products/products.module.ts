import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'pdetails', component: ProductsDetailsComponent },
  { path: 'phome', component: ProductsHomeComponent },
]

@NgModule({
  declarations: [
    ProductsHomeComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
