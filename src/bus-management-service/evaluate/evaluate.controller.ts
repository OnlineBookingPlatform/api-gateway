import { Body, Controller, Post } from '@nestjs/common';
import { EvaluateService } from './evaluate.service';

@Controller('v2/evaluate')
export class EvaluateController {
  constructor(private readonly evaluateService: EvaluateService) {}

  @Post('/create-evaluate')
  async createEvaluate(@Body() data: any) {
    return this.evaluateService.createEvaluate(data);
  }
}
