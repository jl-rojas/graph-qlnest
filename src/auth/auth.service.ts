import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
  ) { }

  public async validate(id) {
    
    return true;
  }
}