import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EvaluateService } from './evaluate.service';

@Controller('v2/evaluate')
export class EvaluateController {
  constructor(private readonly evaluateService: EvaluateService) {}

  @Post('/create-evaluate')
  async createEvaluate(@Body() data: any) {
    return this.evaluateService.createEvaluate(data);
  }

  @Get('/get-evaluates-by-company-id/:id')
  async getEvaluate(@Param('id') id: string) {
    return this.evaluateService.getEvaluatesByCompanyId(id);
  }

  @Get('/get-evaluates-average-by-company-id/:id')
  async getEvaluateAverage(@Param('id') id: string) {
    console.log('Fetching evaluate average for company ID:', id);
    return this.evaluateService.getEvaluateAverageByCompanyId(id);
  }
}
