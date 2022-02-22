import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { Merchant } from './schemas/merchant.schema';

@Controller("merchant")
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post("/create")
  async create(@Body() createMerchantDto: CreateMerchantDto) {
      console.log(createMerchantDto)
    await this.merchantsService.create(createMerchantDto);
  }

  @Get("/allDetails")
  async findAll(): Promise<Merchant[]> {
    return await this.merchantsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<Merchant> {
    return await this.merchantsService.findOne(id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.merchantsService.delete(id);
  }
  @Patch('/:id')
 async update(@Param('id') id: string, @Body() updateMerchantDto: CreateMerchantDto) {
    return await this.merchantsService.update(id, updateMerchantDto);
  }
}