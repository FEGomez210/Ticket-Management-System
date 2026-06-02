import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 2. Agrégalo aquí a los imports
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
