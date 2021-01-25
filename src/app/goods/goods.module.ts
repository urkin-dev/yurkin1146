import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsComponent } from './goods.component';
import { GoodsEditComponent } from './goods-edit/goods-edit.component';
import { GoodsTableComponent } from '../ui/goods-table/goods-table.component';


@NgModule({
  declarations: [
    GoodsListComponent,
    GoodsComponent,
    GoodsEditComponent,
    GoodsTableComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
