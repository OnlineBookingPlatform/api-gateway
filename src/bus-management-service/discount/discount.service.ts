import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class DiscountService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly discount: ClientProxy,
  ) {}
  createDiscount(data: any) {
    console.log('data', data);
    return this.discount.send('create_discount', data);
  }
  getDiscountsByCompany(id: any) {
    return this.discount.send('get_discounts_by_company', id);
  }
  updateDiscount(id: number, data: any) {
    return this.discount.send('update_discount', { id, data });
  }
  deleteDiscount(id: number) {
    return this.discount.send('delete_discount', id);
  }
  getDiscountsByUserPurchase(id: any) {
    return this.discount.send('get_discounts_by_user_purchase', id);
  }
}
