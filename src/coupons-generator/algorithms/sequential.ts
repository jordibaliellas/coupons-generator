import { CouponGenerator } from '../interfaces/coupon.interface';

export class SequentialCouponGenerator implements CouponGenerator {
  public *getCoupons(total: number): Generator<string> {
    for (let index = 0; index < total; index++) {
      yield `${index}`;
    }
  }
}
