import { Controller } from '@nestjs/common';
import { CouponGenerator } from './interfaces/coupon.interface';

@Controller('CouponGenerator')
export class CouponGeneratorController {
  constructor(private couponGenerator: CouponGenerator) {}

  getCoupons(total: number): string[] {
    return [...this.couponGenerator.getCoupons(total)];
  }
}
