import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // Ahora 'update' está DENTRO de la clase AppService
  update(id: number, updateTicketDto: { status: string }) {
    return this.prisma.ticket.update({
      where: { id },
      data: { status: updateTicketDto.status },
    });
  }
}
