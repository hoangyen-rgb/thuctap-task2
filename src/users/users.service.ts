import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];
  private count = 1;

  registerUser(user: CreateUserDto) {
    user.id = this.count++;
    this.users.push(user);
    return user;
  }

  getAllUsers(): CreateUserDto[] {
    return this.users;
  }
}
