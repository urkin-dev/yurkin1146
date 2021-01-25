import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { GoodsService } from 'src/app/shared/services/goods.service';

@Component({
  selector: 'app-goods-edit',
  templateUrl: './goods-edit.component.html',
  styleUrls: ['./goods-edit.component.scss']
})
export class GoodsEditComponent implements OnInit {

  id!: number;
  product!: Product;
  productForm!: FormGroup;

  constructor(
    private goodsService: GoodsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      count: new FormControl(null, [
        Validators.required
      ]),
      status: new FormControl(null, [
        Validators.required
      ])
    });

    this.getData();
  }

  async getData(): Promise<any> {
    try {
      this.product = await this.goodsService.getOneById(this.id);
    } catch (e) {
      console.error(e);
    }
    this.productForm.patchValue({
      title: this.product.title,
      count: this.product.count,
      status: this.product.status
    });
  }

  async onSave(): Promise<any> {
    try {
      await this.goodsService.putOneById(this.id, this.productForm.value);
      this.router.navigate(['/goods']);
    } catch (e) {
      console.error(e);
    }
  }

  async onDelete(): Promise<any> {
    try {
      await this.goodsService.deleteOneById(this.id);
    } catch (e) {
      console.error(e);
    }
    this.router.navigate(['/goods']);
  }

}
