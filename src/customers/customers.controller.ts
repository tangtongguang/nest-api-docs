import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Customer } from './schemas/customer.schema';


@Controller('customers')
export class CustomersController {

  constructor(
    @InjectModel('customer') private readonly customerModel: Model<Customer>,
  ) { }




  public async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<Customer[]> {
    const { limit, offset } = paginationQuery;

    return await this.customerModel
      .find()
      .skip(offset)
      .limit(limit)
      //.populate('organization')
      .exec();
  }
  @Get()
  public async getAllCustomer(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const customers = await this.findAll(paginationQuery);
    return res.status(HttpStatus.OK).json(customers);
  }


}
