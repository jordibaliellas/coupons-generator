import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouponGeneratorModule } from './coupons-generator/coupon-generator.module';

@Module({
  imports: [ConfigModule.forRoot(), CouponGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
