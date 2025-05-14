import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EvaluateService } from './evaluate.service';

@Controller('v2/evaluate')
export class EvaluateController {
  constructor(private readonly evaluateService: EvaluateService) {}

  @Post('/create-evaluate')
  async createEvaluate(@Body() data: any) {
    return this.evaluateService.createEvaluate(data);
  }

  @Get('/get-evaluates-by-trip-id/:id')
  async getEvaluate(@Param('id') id: string) {
    return this.evaluateService.getEvaluatesByTripId(id);
  }

  @Get('/get-evaluates-average/:id')
  async getEvaluateAverage(@Param('id') id: string) {
    console.log('Fetching evaluate average for trip ID:', id);
    return this.evaluateService.getEvaluateAverage(id);
  }
}
