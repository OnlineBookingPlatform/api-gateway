import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  googleLogin(data: any) {
    console.log('📥 Nhận dữ liệu đăng nhập Google:', data);
    return this.client.send('google_login', data);
  }

  facebookLogin(data: any) {
    console.log('📥 Nhận dữ liệu đăng nhập Facebook:', data);
    return this.client.send('facebook_login', data);
  }

  // E1.UC1: Username/Password Login
  bmsLogin(data: any) {
    console.log('📥 Nhận dữ liệu đăng nhập BMS:', data);
    return this.client.send('bms_login', data);
  }

  superAdminLogin(data: any) {
    return this.client.send('super_admin_login', data);
  }
}
