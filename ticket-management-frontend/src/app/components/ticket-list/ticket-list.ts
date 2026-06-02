import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  // Inyectamos el servicio
  constructor(private ticketService: TicketService) {}

  // Se ejecuta automáticamente al cargar el componente
  ngOnInit(): void {
    this.loadTickets();
    this.ticketService.ticketCreado$.subscribe(() => {
      this.loadTickets(); 
    });
  }

  loadTickets(): void {
    // Nos suscribimos al Observable que viene de NestJS
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
      },
      error: (error) => {
        console.error('Error al cargar los tickets', error);
      }
    });
  }
  
  resolve(id: number): void {
    this.ticketService.updateTicketStatus(id, 'RESOLVED').subscribe({
      next: () => console.log('Ticket resuelto correctamente'),
      error: (err: any) => console.error('Error al resolver', err)
    });
  }
}
