import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AccountService } from '../../account-service/account/account.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InterestInRouteService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
    private readonly accountService: AccountService,
  ) {}

  async findAllByAccountId(id: string) {
    // Validate account exists
    const account = await firstValueFrom(this.accountService.getAccountInfo(id));
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    return this.client.send('findall_interests_by_account', id);
  }

  async create(data: { accountId: string; routeId: number }) {
    // Validate account exists
    const account = await firstValueFrom(this.accountService.getAccountInfo(data.accountId));
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    return this.client.send('create_interest_in_route', data);
  }

  async delete(id: number) {
    // For delete operation, we need to get the interest first to validate account
    const interest = await firstValueFrom(this.client.send('get_interest_in_route', id));
    if (!interest) {
      throw new NotFoundException('Interest in route not found');
    }
    // Validate account exists
    const account = await firstValueFrom(this.accountService.getAccountInfo(interest.accountId));
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    return this.client.send('delete_interest_in_route', id);
  }
}
