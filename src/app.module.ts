import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouponGeneratorModule } from './coupons-generator/coupon-generator.module';

@Module({
  imports: [CouponGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
