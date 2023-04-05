import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contact } from './entities/contacts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContactDto } from './dtos/create-contact.dto';
import { PaginationQueryDto } from './dtos/pagination-query.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private readonly repo: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto) {
    const contact = this.repo.create({
      ...createContactDto,
    });

    return this.repo.save(contact);
  }

  async find(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    const contacts = await this.repo.find({
      skip: offset,
      take: limit,
    });
    return contacts;
  }

  async findOne(id: number) {
    const contact = await this.repo.findOneBy({ id });
    console.log(contact);
    if (!contact) throw new NotFoundException('contact not found');
    return contact;
  }

  async update(id: number, attrs: Partial<Contact>) {
    const contact = await this.repo.preload({
      id,
      ...attrs,
    });
    if (!contact) throw new NotFoundException('contact not found');
    return await this.repo.save(contact);
  }

  async remove(id: number) {
    const contact = await this.repo.findOneBy({ id });
    if (!contact) throw new NotFoundException('contact not found');
    await this.repo.remove(contact);
  }
}
