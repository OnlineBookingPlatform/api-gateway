import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TicketService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  getTicketByTrip(id: number) {
    console.log('Sending request to Bus Management Service:', id);
    return this.client.send('get_ticket_by_trip', id);
  }
  changeTicketBooked(data: any) {
    return this.client.send('change_ticket_booked', data);
  }
  changeTicketAvailable(data: any) {
    return this.client.send('change_ticket_available', data);
  }
  updateTicketOnPlatform(data: any) {
    return this.client.send('update_ticket_on_platform', data);
  }
  updateTicketInfoOnBMS(data: any) {
    return this.client.send('update_ticket_info_on_bms', data);
  }
  searchTicketOnPlatform(data: any) {
    return this.client.send('search_ticket_on_platform', data);
  }
  createTicketByPaymentService(data: any) {
    return this.client.send('create_ticket_by_payment_service', data);
  }
  updatePaidTicketAmount(data: any) {
    return this.client.send('update_paid_ticket_amount', data);
  }
  getTicketByAccountId(id: string) {
    console.log('Sending request to Bus Management Service:', id);
    return this.client.send('get_ticket_by_account_id', id);
  }
  abortTicketOnPlatform(id: number) {
    return this.client.send('abort_ticket_on_platform', id);
  }
}
