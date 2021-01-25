import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-goods-addform',
  templateUrl: './goods-addform.component.html',
  styleUrls: ['./goods-addform.component.scss']
})
export class GoodsAddformComponent implements OnInit {

  title = '';
  count = 1;
  addform!: FormGroup;
  disabledForms = false;

  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    this.addform = new FormGroup({
      title: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      count: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
        // Validators.pattern('^[1-9]\d*$')
        // TODO: Fix it
      ])
    });
  }

  onAddProduct(): void {
    this.addProduct.emit({
      title: this.title,
      count: this.count,
      status: false
    });

    this.title = '';
    this.count = 0;
  }

}
