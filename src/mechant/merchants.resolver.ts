import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FilterMerchantDto, MerchantDto } from './dto/merchant.dto';
import { MerchantModel } from './merchants.model';

import { MerchantsService } from './merchants.service';

@Resolver(() => MerchantModel)
export class MerchantResolver {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Query(() => [MerchantModel])
  async getAllMerchant(
    @Args('filterValues') filterValues: FilterMerchantDto,
    @Args('dataSkip') dataSkip: number,
  ): Promise<MerchantModel[]> {
    return await this.merchantsService.getAllMerchant(filterValues,dataSkip);
  }

  @Query(() => MerchantModel)
  async getSelectedRowDetail(@Args('_id') _id: String): Promise<MerchantModel> {
    return await this.merchantsService.getSelectedRowDetail(_id);
  }

  @Query(() => Number)
  async getMerchantCount(
    @Args('filterValues') filterValues: FilterMerchantDto,
  ) {
    return await this.merchantsService.getMerchantCount(filterValues);
  }

  @Mutation(() => MerchantModel)
  async createMerchant(@Args('merchantDetail') merchantDetail: MerchantDto) {
    return await this.merchantsService.createMerchant(merchantDetail);
  }

  @Mutation(() => MerchantModel)
  async updateMerchant(
    @Args('merchantDetail') merchantDetail: MerchantDto,
    @Args('_id') _id: String,
  ) {
    return await this.merchantsService.updateMerchant(_id, merchantDetail);
  }

  @Mutation(() => MerchantModel)
  async deleteMerchant(@Args('_id') _id: String) {
    return await this.merchantsService.deleteMerchant(_id);
  }
}
