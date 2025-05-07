import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // Tạo tài khoản nhân viên BMS
  @Post('/create-account')
  createAccount(@Body() data: any) {
    return this.accountService.createAccount(data);
  }
  @Get('/get-account-info/:id')
  getAccountInfo(@Param('id') id: string) {
    return this.accountService.getAccountInfo(id);
  }

  @Put('/update-account-info/:id')
  updateAccountInfo(@Param('id') id: string, @Body() data: any) {
    return this.accountService.updateAccountInfo(id, data);
  }
  @Put('/update-avatar-account/:id')
  updateAvatarAccount(@Param('id') id: string, @Body() url_avatar: any) {
    return this.accountService.updateAvatarAccount(id, url_avatar);
  }

  @Get('/get-all-account-by-company/:id')
  getAllAccountByCompany(@Param('id') id: number) {
    return this.accountService.getAllAccountByCompany(id);
  }

  @Delete('/delete-account/:id')
  deleteAccount(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }

  @Post('/create-super-admin-account')
  createSuperAdminAccount(@Body() data: any) {
    return this.accountService.createSuperAdminAccount(data);
  }

  @Get('/get-list-super-admin-account')
  getListSuperAdminAccount() {
    return this.accountService.getListSuperAdminAccount();
  }

  @Delete('/delete-super-admin-account/:id')
  deleteSuperAdminAccount(@Param('id') id: string) {
    return this.accountService.deleteSuperAdminAccount(id);
  }

  @Put('/update-super-admin-account/:id')
  updateSuperAdminAccount(@Param('id') id: string, @Body() data: any) {
    return this.accountService.updateSuperAdminAccount(id, data);
  }

  @Post('/create-account-by-super-admin')
  createAccountBySuperAdmin(@Body() data: any) {
    return this.accountService.createAccountBySuperAdmin(data);
  }

  @Get('/get-list-account-by-company-on-platform/:id')
  getListAccountByCompanyOnPlatform(@Param('id') id: number) {
    return this.accountService.getListAccountByCompanyOnPlatform(id);
  }

  @Delete('/delete-account-by-super-admin/:id')
  deleteAccountBySuperAdmin(@Param('id') id: string) {
    return this.accountService.deleteAccountBySuperAdmin(id);
  }

  @Put('/update-account-by-super-admin/:id')
  updateAccountBySuperAdmin(@Param('id') id: string, @Body() data: any) {
    return this.accountService.updateAccountBySuperAdmin(id, data);
  }

  @Put('/reset-default-password/:id')
  resetDefaultPassword(@Param('id') id: string) {
    return this.accountService.resetDefaultPassword(id);
  }
}
