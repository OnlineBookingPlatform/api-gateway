import { Body, Controller, Get, Post } from '@nestjs/common';
import { ZalopayService } from './zalopay.service';

@Controller('v3/zalopay')
export class ZalopayController {
  constructor(private readonly zalopayService: ZalopayService) {}

  @Post('create-payment')
  async createPayment(@Body() data: any) {
    return this.zalopayService.createPayment(data);
  }
}
