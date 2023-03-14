import { Module } from '@nestjs/common';
import { SequentialCouponGenerator } from './algorithms/sequential';
import { CouponGeneratorController } from './coupon-generator.controller';
import { CouponGenerator } from './interfaces/coupon.interface';

@Module({
  controllers: [CouponGeneratorController],
  providers: [
    {
      provide: CouponGenerator,
      useClass: SequentialCouponGenerator,
    },
  ],
})
export class CouponGeneratorModule {}
