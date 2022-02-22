import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantsModule } from './merchants.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kavin:kavin9942579990@merchantform.m9zdd.mongodb.net/test'),
    MerchantsModule,
  ],
})
export class AppModule {}