import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  create(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({
     data:  {
        title: createTicketDto.title,
        description: createTicketDto.description,
        status: createTicketDto.status,
      },
    });
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  findOne(id: number) {
    return this.prisma.ticket.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketDto,
    });
  }
}
