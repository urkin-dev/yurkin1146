import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsEditComponent } from './goods-edit/goods-edit.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsComponent } from './goods.component';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
    children: [
      {
        path: '',
        component: GoodsListComponent
      },
      {
        path: 'edit/:id',
        component: GoodsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
