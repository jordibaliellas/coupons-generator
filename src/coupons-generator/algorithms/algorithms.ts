import { CouponGenerator } from '../interfaces/coupon.interface';
import { RandomStringCouponGenerator } from './random-string';
import { SequentialCouponGenerator } from './sequential';

type CouponGeneratorArgs = ConstructorParameters<typeof CouponGenerator>;

const algorithms: Record<
  string,
  (...args: CouponGeneratorArgs) => CouponGenerator
> = {
  sequential: (...args: CouponGeneratorArgs) =>
    new SequentialCouponGenerator(...args),
  randomString: (...args: CouponGeneratorArgs) =>
    new RandomStringCouponGenerator(...args),
};

export default algorithms;
