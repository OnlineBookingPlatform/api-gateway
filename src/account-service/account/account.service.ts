import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  getUsers() {
    return this.client.send('get_users', {});
  }

  createAccount(data: any) {
    console.log('📥 Nhận dữ liệu tạo tài khoản:', data);
    return this.client.send('create_account', data);
  }

  googleLogin(data: any) {
    console.log('📥 Nhận dữ liệu đăng nhập Google:', data);
    return this.client.send('google_login', data);
  }

  getAccountInfo(id: string) {
    console.log('📥 Nhận id tài khoản:', id);
    return this.client.send('get_account_info', { id });
  }
  updateAccountInfo(id: string, data: any) {
    return this.client.send('update_account_info', { id, data });
  }
  updateAvatarAccount(id: string, url_avatar: any) {
    return this.client.send('update_avatar_account', { id, url_avatar });
  }
  getAllAccountByCompany(id: number) {
    return this.client.send('get_all_account_by_company', { id });
  }

  deleteAccount(id: string) {
    return this.client.send('delete_account', { id });
  }

  createSuperAdminAccount(data: any) {
    return this.client.send('create_super_admin_account', data);
  }

  getListSuperAdminAccount() {
    return this.client.send('get_list_super_admin_account', {});
  }
  deleteSuperAdminAccount(id: string) {
    return this.client.send('delete_super_admin_account', { id });
  }
  updateSuperAdminAccount(id: string, data: any) {
    return this.client.send('update_super_admin_account', { id, data });
  }
  createAccountBySuperAdmin(data: any) {
    return this.client.send('create_account_by_super_admin', data);
  }
  getListAccountByCompanyOnPlatform(id: number) {
    return this.client.send('get_list_account_by_company_on_platform', {
      id: id,
    });
  }
  deleteAccountBySuperAdmin(id: string) {
    return this.client.send('delete_account_by_super_admin', { id });
  }
  updateAccountBySuperAdmin(id: string, data: any) {
    return this.client.send('update_account_by_super_admin', { id, data });
  }

  changePassword(id: string, newPassword: string) {
    return this.client.send('change_password', { id, newPassword });
  }
}
