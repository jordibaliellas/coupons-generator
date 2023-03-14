import { CouponGenerator } from '../interfaces/coupon.interface';

const DEFAULT_LENGTH = 30;
const chars = 'abcdefghijklmnopqrstuvwxyz';
const randomChars = `${chars}${chars.toUpperCase()}1234567890`;

export class RandomStringCouponGenerator implements CouponGenerator {
  public *getCoupons(total: number): Generator<string> {
    for (let index = 0; index < total; index++) {
      yield this.getRandomString();
    }
  }

  private getRandomString(length: number = DEFAULT_LENGTH): string {
    const randomArray = Array.from(
      { length },
      () => randomChars[Math.floor(Math.random() * randomChars.length)],
    );
    const randomString = randomArray.join('');
    return randomString;
  }
}
