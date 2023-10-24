import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';
import { SaveProductComponent } from './pages/save-product/save-product.component';
import { Route, Router, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Route[] = [
  {
    path: '',
    component: ListProductsComponent
  }
]

@NgModule({
  declarations: [
    ListProductsComponent,
    DeleteProductComponent,
    SaveProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
