import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { UsersCreateDto } from './dtos/users-create.dto';
import { comparePassword, encodePassword } from './utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  create(username: string, email: string, password: string) {
    password = encodePassword(password);
    const user = this.repo.create({ username, email, password });
    return this.repo.save(user);
  }

  async find(body: UsersCreateDto) {
    const user = await this.repo.findOneBy({ email: body.email });
    if (!user) {
      throw new NotFoundException('user not found');
    } else {
      if (comparePassword) {
        return true;
      }
    }
  }
}
