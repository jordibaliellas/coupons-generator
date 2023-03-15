import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import algorithms from './algorithms/algorithms';
import { CouponGeneratorController } from './coupon-generator.controller';
import { CouponGenerator } from './interfaces/coupon.interface';

@Module({
  imports: [ConfigModule],
  controllers: [CouponGeneratorController],
  providers: [
    {
      provide: CouponGenerator,
      useFactory: (configService: ConfigService) => {
        const algorithmKey = configService.get('ALGORITHM');
        const algorithm = algorithms[algorithmKey];
        if (!algorithm) throw new Error('Invalid algorithm');
        return algorithm();
      },
      inject: [ConfigService],
    },
  ],
})
export class CouponGeneratorModule {}
