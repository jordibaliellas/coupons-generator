import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RandomStringCouponGenerator } from './algorithms/random-string';
import { CouponGeneratorController } from './coupon-generator.controller';
import { CouponGenerator } from './interfaces/coupon.interface';

console.log('envv: ', process.env.DATABASE_USER);

@Module({
  imports: [ConfigModule],
  controllers: [CouponGeneratorController],
  providers: [
    {
      provide: CouponGenerator,
      useFactory: (configService: ConfigService) => {
        return new RandomStringCouponGenerator();
      },
      inject: [ConfigService],
    },
  ],
})
export class CouponGeneratorModule {}
