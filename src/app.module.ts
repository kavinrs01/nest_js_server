import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { join } from 'path';
import { MerchantsModule } from './mechant/merchants.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kavin:kavin9942579990@merchantform.m9zdd.mongodb.net/test',
    ),
    MerchantsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
