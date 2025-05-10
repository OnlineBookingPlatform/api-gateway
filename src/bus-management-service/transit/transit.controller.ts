import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { TransitService } from './transit.service';

@Controller('v2/transit')
export class TransitController {
  constructor(private readonly transitService: TransitService) {}

  @Post('create-transit/:company_id')
  createTransit(
    @Param('company_id') company_id: number,
    @Body() data: { readonly content: string },
  ) {
    console.log(company_id);
    return this.transitService.createTransit(company_id, data.content);
  }

  @Put('update-transit/:id')
  updateTransit(
    @Param('id') id: number,
    @Body() data: { readonly content: string },
  ) {
    return this.transitService.updateTransit(id, data.content);
  }
}
