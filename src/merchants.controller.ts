import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { CreateMerchantDto, FilterMerchantDto } from './dto/create-merchant.dto';
import { Merchant } from './schemas/merchant.schema';

@Controller('merchant')
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post('/create')
  async create(@Body() createMerchantDto: CreateMerchantDto) {
    await this.merchantsService.create(createMerchantDto);
  }

  @Post('/allDetails/:dataSkip')
  async findAll(@Body() filterValues:FilterMerchantDto ,@Param("dataSkip") dataSkip:number): Promise<Merchant[]> {
    return await this.merchantsService.findAll(filterValues,dataSkip);
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
  async update(
    @Param('id') id: string,
    @Body() updateMerchantDto: CreateMerchantDto,
  ) {
    return await this.merchantsService.update(id, updateMerchantDto);
  }
  @Post('/pageCount')
  async pageCount(@Body() filterValues:FilterMerchantDto) {
   return await this.merchantsService.pageCount(filterValues);
  }

}
