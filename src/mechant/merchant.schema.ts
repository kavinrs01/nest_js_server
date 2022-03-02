import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MerchantDocument = Merchant & Document;

@Schema()
export class Merchant {
  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  website: string;

  @Prop()
  contactName: string;

  @Prop()
  contactPhone: string;

  @Prop()
  contactEmail: string;
  
  @Prop()
  notes: string;

  @Prop()
  typeOfBusiness: string;

  @Prop()
  catageryOfBusiness: string[];

  @Prop()
  comissionPercentage: number;

  @Prop()
  activeFrom: Date;

  @Prop()
  criticalAccount: boolean;

  @Prop()
  paymentOption: string[];

  @Prop()
  isDelete: boolean;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
