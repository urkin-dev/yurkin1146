import { OrderByStatusPipe } from './order-by-status.pipe';

describe('OrderByStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
