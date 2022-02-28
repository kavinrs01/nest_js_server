import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateMerchantDto,
  FilterMerchantDto,
} from './dto/create-merchant.dto';
import { Merchant, MerchantDocument } from './schemas/merchant.schema';

@Injectable()
export class MerchantsService {
  constructor(
    @InjectModel(Merchant.name)
    private readonly merchantModel: Model<MerchantDocument>,
  ) {}
  async update(id: string, updateMerchantDto: CreateMerchantDto) {
    const updatedMerchant = await this.merchantModel.findByIdAndUpdate(
      id,
      updateMerchantDto,
    );
    return updatedMerchant;
  }
  async create(createMerchantDto: CreateMerchantDto): Promise<Merchant> {
    const createdMerchant = await this.merchantModel.create({...createMerchantDto,isDelete:false});
    return createdMerchant;
  }

  async findAll(
    filterValues: FilterMerchantDto,
    dataSkip: number,
  ): Promise<Merchant[]> {
    return await this.merchantModel
      .find(
        filterValues.search
          ? {
             $and:[{ $or: [
                { userName: { $regex: filterValues.search, $options: 'i' } },
                { email: { $regex: filterValues.search, $options: 'i' } }
              ]},{isDelete:false}]
            }
          : {isDelete:false},
      )
      .sort({[filterValues.sortBy]:filterValues.sortOrder})
      .skip(dataSkip)
      .limit(10)
      .exec();
  }

  async findOne(id: string): Promise<Merchant> {
    return await this.merchantModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedMerchant = await this.merchantModel
      .findByIdAndUpdate(id,{ isDelete: true })
      .exec();
    return deletedMerchant;
  }
  async pageCount(filterValues: FilterMerchantDto) {
    const count = await this.merchantModel
      .find(
        filterValues.search
          ? {
              $or: [
                { userName: { $regex: filterValues.search, $options: 'i' } },
                { email: { $regex: filterValues.search, $options: 'i' } },
              ],
            }
          : {isDelete:false},
      )
      .count()
      .exec();
    return count;
  }
}
