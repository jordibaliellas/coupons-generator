import { Module } from '@nestjs/common';
import { RandomStringCouponGenerator } from './algorithms/random-string';
import { CouponGeneratorController } from './coupon-generator.controller';
import { CouponGenerator } from './interfaces/coupon.interface';

@Module({
  controllers: [CouponGeneratorController],
  providers: [
    {
      provide: CouponGenerator,
      useClass: RandomStringCouponGenerator,
    },
  ],
})
export class CouponGeneratorModule {}
