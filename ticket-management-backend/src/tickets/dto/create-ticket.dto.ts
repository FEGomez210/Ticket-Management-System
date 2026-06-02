import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty({ message: 'Title should not be empty' }) // <-- Validación clave
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  status!: string;
}