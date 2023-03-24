import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Contact } from 'src/contacts/entities/contacts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Contact])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
