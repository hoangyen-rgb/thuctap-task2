import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], // Nhập UsersModule vào AppModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}