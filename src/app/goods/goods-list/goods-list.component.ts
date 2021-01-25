import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { GoodsService } from 'src/app/shared/services/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  goods: Product[] = [];

  constructor(private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<any> {
    try {
      const goods = await this.goodsService.getAll();
      if (goods !== null && goods !== undefined) {
        this.goods = goods;
      }
    } catch (e) {
      console.error(e);
    }
  }

}
