import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MerchantDto {
  @Field(() => String, { nullable: true })
  userName?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => String, { nullable: true })
  contactName?: string;

  @Field(() => String, { nullable: true })
  contactPhone?: string;

  @Field(() => String, { nullable: true })
  contactEmail?: string;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => String, { nullable: true })
  typeOfBusiness?: string;

  @Field(() => [String], { nullable: true })
  catageryOfBusiness?: string[];

  @Field(() => Number, { nullable: true })
  comissionPercentage?: number;

  @Field(() => Date, { nullable: true })
  activeFrom?: Date;

  @Field(() => Boolean, { nullable: true })
  criticalAccount?: boolean;

  @Field(() => [String], { nullable: true })
  paymentOption?: string[];
}
@InputType()
export class FilterMerchantDto {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  sortBy?: string;

  @Field(() => Number, { nullable: true })
  sortOrder?: number;
}
