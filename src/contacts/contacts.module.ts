import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contacts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
