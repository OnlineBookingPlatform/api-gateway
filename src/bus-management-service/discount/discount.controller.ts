import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { DiscountService } from './discount.service';

@Controller('v2/discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}
  @Post('/create-discount')
  createDiscount(@Body() data: any) {
    return this.discountService.createDiscount(data);
  }
  @Get('/get-discounts-by-company/:id')
  getDiscountsByCompany(@Param('id') id: any) {
    console.log('id', id);
    return this.discountService.getDiscountsByCompany(id);
  }
  @Put('/update-discount/:id')
  updateDiscount(@Param('id') id: number, @Body() data: any) {
    return this.discountService.updateDiscount(id, data);
  }
  @Delete('/delete-discount/:id')
  deleteDiscount(@Param('id') id: number) {
    return this.discountService.deleteDiscount(id);
  }
}
