import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { GoodsService } from 'src/app/shared/services/goods.service';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss']
})
export class GoodsTableComponent implements OnInit {

  @Input() goods: Product[] = [];

  constructor(private goodsService: GoodsService) { }

  ngOnInit(): void {
  }

  changeStatus(id: any): void {
    const index = this.goods.findIndex((g) => g.id === id);

    if (index !== -1) {
      const product = this.goods[index];
      product.status = !product.status;
      this.goodsService.putOneById(id, product);
    }
  }

}
