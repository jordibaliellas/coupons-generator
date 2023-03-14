export abstract class CouponGenerator {
  public abstract getCoupons(total: number): Generator<string>;
}
