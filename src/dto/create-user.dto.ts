import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  id?: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
