import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('v2/ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('get-ticket-by-trip/:id')
  getTicketByTrip(@Param('id') id: number) {
    console.log('Received request:', id);
    return this.ticketService.getTicketByTrip(id);
  }

  @Post('change-ticket-booked')
  changeTicketBooked(@Body() data: any) {
    return this.ticketService.changeTicketBooked(data);
  }

  @Post('change-ticket-available')
  changeTicketAvailable(@Body() data: any) {
    return this.ticketService.changeTicketAvailable(data);
  }

  @Post('update-ticket-on-platform')
  updateTicketOnPlatform(@Body() data: any) {
    return this.ticketService.updateTicketOnPlatform(data);
  }

  @Put('update-ticket-info-on-bms')
  updateTicketInfoOnBMS(@Body() data: any) {
    return this.ticketService.updateTicketInfoOnBMS(data);
  }
}
