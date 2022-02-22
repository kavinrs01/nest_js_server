import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MerchantDocument = Merchant & Document;

@Schema()
export class Merchant {
  @Prop()
  userName: String;
  @Prop()
  email: String;
  @Prop()
  phoneNumber: Number;
  @Prop()
  website: String;
  @Prop()
  contactName: String;
  @Prop()
  contactPhone: String;
  @Prop()
  contactEmail: String;
  @Prop()
  notes: String;
  @Prop()
  typeOfBusiness: String;
  @Prop()
  catageryOfBusiness: string[];
  @Prop()
  comissionPercentage: Number;
  @Prop()
  activeFrom: Date;
  @Prop()
  criticalAccount: Boolean;
  @Prop()
  paymentOption: string[];
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
