import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { OrderByStatusPipe } from 'src/app/shared/pipes/order-by-status.pipe';
import { GoodsService } from 'src/app/shared/services/goods.service';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss']
})
export class GoodsTableComponent implements OnInit {

  ascOrder = false;

  @Input() goods: Product[] = [];

  @Output() deleteProduct = new EventEmitter<number>();

  constructor(private goodsService: GoodsService, private router: Router) { }

  ngOnInit(): void {
  }

  changeStatus(id: any): void {
    const index = this.goods.findIndex((g) => g.id === id);

    if (index !== -1) {
      const product = this.goods[index];
      product.status = !product.status;
      this.goodsService.putOneById(id, product);
      const statusFilter = new OrderByStatusPipe();
      statusFilter.transform(this.goods, 'status');
    }
  }

  onEdit(id: any): void {
    this.router.navigate([this.router.url, 'edit', id]);
  }

  onDelete(id: any): void {
    this.deleteProduct.emit(id);
  }

  orderByTitle(): void {
    this.ascOrder = !this.ascOrder;
  }

}
