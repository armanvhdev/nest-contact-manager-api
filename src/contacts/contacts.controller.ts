import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateContactDto } from './dtos/create-contact.dto';
import { ContactsService } from './contacts.service';
import { PaginationQueryDto } from './dtos/pagination-query.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  findAllContacts(@Query() paginationQuery : PaginationQueryDto) {
    return this.contactsService.find(paginationQuery);
  }

  @Get('/:id')
  findContact(@Param('id') id: number) {
    return this.contactsService.findOne(id);
  }

  @Patch('/:id')
  updateContact(
    @Param('id') id: number,
    @Body() createContactDto: CreateContactDto,
  ) {
    console.log(createContactDto);
    return this.contactsService.update(id, createContactDto);
  }

  @Delete('/:id')
  removeContact(@Param('id') id: number) {
    this.contactsService.remove(id);
  }
}
