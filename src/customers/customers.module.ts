import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers.controller';
import { CustomerSchema } from './schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'customer', schema: CustomerSchema }
    ])
  ],
  controllers: [CustomersController]
})
export class CustomersModule { }
