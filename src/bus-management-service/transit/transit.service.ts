import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TransitService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createTransit(company_id: number, content: string) {
    return this.client.send('create_transit', { company_id, content });
  }

  updateTransit(id: number, content: string) {
    return this.client.send('update_transit', { id, content });
  }
}
