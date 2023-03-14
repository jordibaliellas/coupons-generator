import { CouponGenerator } from '../interfaces/coupon.interface';

export class SequentialCouponGenerator implements CouponGenerator {
  public *getCoupons(total: number): Generator<string> {
    const totalLength = (total - 1).toString().length;
    for (let index = 0; index < total; index++) {
      yield `${index}`.padStart(totalLength, '0');
    }
  }
}
