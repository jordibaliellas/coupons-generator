import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CouponGeneratorController } from './coupons-generator/coupon-generator.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const couponController = app.get(CouponGeneratorController);
  console.log('HIIII');
  const res = couponController.getCoupons(10);
  console.log('REEES: ', res);
}
bootstrap();
