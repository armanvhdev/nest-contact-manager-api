import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column({ nullable: true })
  lastname?: string;

  @Column()
  phonenumber: string;

  @Column({ nullable: true })
  email?: string;
}
