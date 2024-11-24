// users.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service'; // Nhập interface User từ users.service
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users') // Định nghĩa controller cho đường dẫn 'users'
export class UsersController {
  // Khởi tạo UsersService
  constructor(private readonly usersService: UsersService) {}

  // Định nghĩa route để đăng ký người dùng
  @Post('register')
  register(@Body() CreateUserDto: CreateUserDto) {
    // Xác định kiểu trả về là User
    return this.usersService.registerUser(CreateUserDto); // Gọi phương thức đăng ký người dùng từ service
  }

  // Định nghĩa route để lấy danh sách người dùng
  @Get('get-users')
  getUsers(): CreateUserDto[] {
    // Xác định kiểu trả về là mảng User
    return this.usersService.getAllUsers(); // Gọi phương thức lấy tất cả người dùng từ service
  }
}
