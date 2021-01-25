import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAddformComponent } from './goods-addform.component';

describe('GoodsAddformComponent', () => {
  let component: GoodsAddformComponent;
  let fixture: ComponentFixture<GoodsAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsAddformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
