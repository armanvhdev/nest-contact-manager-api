import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [UsersModule, ContactsModule],
  controllers: [AppController, UsersController, ContactsController],
  providers: [AppService, UsersService],
})
export class AppModule {}
