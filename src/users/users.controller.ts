import { Body, Controller, Post } from '@nestjs/common';
import { UsersCreateDto } from './dtos/users-create.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  register(@Body() body: UsersCreateDto) {
    return this.usersService.create(body.username, body.email, body.password);
  }

  @Post('/login')
  login(@Body() body: UsersCreateDto) {
    return this.usersService.find(body);
  }
}
