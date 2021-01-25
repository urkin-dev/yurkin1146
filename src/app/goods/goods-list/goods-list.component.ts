import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
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

  async onAddProduct(product: Product): Promise<any> {
    if (this.goods.length > 0) {
      let maxId = 0;
      this.goods.forEach(p => {
        if (p.id !== undefined) {
          if (p.id > maxId) {
            maxId = p.id;
          }
        }
      });

      product.id = maxId + 1;
    } else {
      product.id = 0;
    }

    this.goodsService.postOne(product);

    this.goods.push(product);
    const orderGoods = new OrderByPipe();
    orderGoods.transform(this.goods, false);
  }

  async deleteProductById(id: number): Promise<any> {
    const index = this.goods.findIndex((g) => g.id === id);

    if (index !== -1) {
      this.goods.splice(index, 1);
      await this.goodsService.deleteOneById(id);
    }
  }

}
