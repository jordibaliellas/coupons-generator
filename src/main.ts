import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CouponGeneratorController } from './coupons-generator/coupon-generator.controller';

function convertQuantityToNumber(quantity: string): number {
  const parsed = parseInt(quantity, 10);
  if (isNaN(parsed)) {
    throw new Error('Invalid quantity');
  }
  return parsed;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const quantity = convertQuantityToNumber(configService.get('QUANTITY'));

  const couponController = app.get(CouponGeneratorController);
  const res = couponController.getCoupons(quantity);
  console.log('REEES: ', res);
}
bootstrap();
