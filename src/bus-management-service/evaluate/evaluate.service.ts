import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EvaluateService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createEvaluate(data: any) {
    return this.client.send('create_evaluate', data);
  }

  getEvaluatesByCompanyId(tripId: string) {
    return this.client.send('get_evaluates_by_company_id', tripId);
  }

  getEvaluateAverageByCompanyId(tripId: string) {
    return this.client.send('get_average_evaluate_by_company_id', tripId);
  }
}
