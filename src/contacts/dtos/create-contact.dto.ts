import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  phonenumber: string;

  @IsString()
  @IsOptional()
  email: string;
}
