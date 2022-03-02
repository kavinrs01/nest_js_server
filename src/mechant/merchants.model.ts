import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MerchantModel {
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

  @Field(() => String, { nullable: true })
  _id?: string;
}
