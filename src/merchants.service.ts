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
    const createdMerchant = await this.merchantModel.create(createMerchantDto);
    return createdMerchant;
  }

  async findAll(filterValues: FilterMerchantDto,dataSkip:number): Promise<Merchant[]> {
    return await this.merchantModel
      .find(
        filterValues.search
          ?{ $or: [ { userName: filterValues.search}, { email:filterValues.search } ] }
          : null,
      ).sort({userName:1}).skip(dataSkip).limit(10)
      .exec();
  }

  async findOne(id: string): Promise<Merchant> {
    return await this.merchantModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedMerchant = await this.merchantModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedMerchant;
  }
  async pageCount(){
    const count=await this.merchantModel.find().count().exec();
    return count;

  }
}
