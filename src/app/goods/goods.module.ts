import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsComponent } from './goods.component';
import { GoodsEditComponent } from './goods-edit/goods-edit.component';
import { GoodsTableComponent } from '../ui/goods-table/goods-table.component';
import { GoodsAddformComponent } from '../ui/goods-addform/goods-addform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';


@NgModule({
  declarations: [
    GoodsListComponent,
    GoodsComponent,
    GoodsEditComponent,
    GoodsTableComponent,
    GoodsAddformComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GoodsModule { }
