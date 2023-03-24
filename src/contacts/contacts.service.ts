import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contact } from './entities/contacts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private readonly repo: Repository<Contact>,
  ) {}

  create(
    firstname: string,
    lastname: string,
    phonenumber: string,
    email: string,
  ) {
    const contact = this.repo.create({
      firstname,
      lastname,
      phonenumber,
      email,
    });

    return this.repo.save(contact);
  }

  find() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const contact = await this.repo.findOneBy({ id });
    console.log(contact);
    if (!contact) throw new NotFoundException('contact not found');
    return contact;
  }

  async update(id: number, attrs: Partial<Contact>) {
    const contact = await this.repo.findOneBy({ id });
    if (!contact) throw new NotFoundException('contact not found');
    Object.assign(contact, attrs);
    return await this.repo.save(contact);
  }

  async remove(id: number) {
    const contact = await this.repo.findOneBy({ id });
    if (!contact) throw new NotFoundException('contact not found');
    await this.repo.remove(contact);
  }
}
