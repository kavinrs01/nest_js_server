import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant, MerchantDocument } from 'src/mechant/merchant.schema';
import { FilterMerchantDto, MerchantDto } from './dto/merchant.dto';

@Injectable()
export class MerchantsService {
  constructor(
    @InjectModel(Merchant.name)
    private readonly merchantModel: Model<MerchantDocument>,
  ) {}

  async createMerchant(merchantDetail: MerchantDto) {
    const createdMerchant = await this.merchantModel.create({
      ...merchantDetail,
      isDelete: false,
    });
    return createdMerchant;
  }

  async getAllMerchant(
    filterValues: FilterMerchantDto,
    dataSkip: number,
  ): Promise<Merchant[]> {
    const allValues = await this.merchantModel
      .find(
        filterValues.search
          ? {
              $and: [
                { isDelete: false },
                {
                  $or: [
                    {
                      userName: { $regex: filterValues.search, $options: 'i' },
                    },
                    { email: { $regex: filterValues.search, $options: 'i' } },
                  ],
                },
              ],
            }
          : { isDelete: false },
      )
      .sort({ [filterValues.sortBy]: filterValues.sortOrder })
      .skip(dataSkip)
      .limit(10)
      .exec();
    return allValues;
  }

  async getMerchantCount(filterValues: FilterMerchantDto): Promise<Number> {
    const count = await this.merchantModel
      .find(
        filterValues.search
          ? {
              $and: [
                { isDelete: false },
                {
                  $or: [
                    {
                      userName: { $regex: filterValues.search, $options: 'i' },
                    },
                    { email: { $regex: filterValues.search, $options: 'i' } },
                  ],
                },
              ],
            }
          : { isDelete: false },
      )
      .count()
      .exec();
    return count;
  }

  async getSelectedRowDetail(_id: String): Promise<Merchant> {
    return await this.merchantModel.findById(_id).exec();
  }

  async updateMerchant(_id: String, merchantDetail: MerchantDto) {
    const updatedMerchant = await this.merchantModel
      .findByIdAndUpdate(_id, merchantDetail, { new: true })
      .exec();
    return updatedMerchant;
  }

  async deleteMerchant(_id: String) {
    const deletedMerchant = await this.merchantModel
      .findByIdAndUpdate(_id, { isDelete: true })
      .exec();
    return deletedMerchant;
  }
}
