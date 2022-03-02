import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Merchant, MerchantSchema } from 'src/mechant/merchant.schema';
import { MerchantResolver } from './merchants.resolver';
import { MerchantsService } from './merchants.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Merchant.name, schema: MerchantSchema },
    ]),
  ],
  controllers: [],
  providers: [MerchantsService, MerchantResolver],
})
export class MerchantsModule {}
