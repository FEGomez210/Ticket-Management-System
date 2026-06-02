import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'; // Importación necesaria para el 'tap'
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:3000/tickets';

 
  private ticketCreado = new Subject<void>();
  ticketCreado$ = this.ticketCreado.asObservable();
  
  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  } 

  createTicket(ticket: Omit<Ticket, 'id' | 'createdAt'>): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket).pipe(
      tap(() => this.ticketCreado.next())
    );
  }

 updateTicketStatus(id: number, status: string): Observable<Ticket> {
    return this.http.patch<Ticket>(`${this.apiUrl}/${id}`, { status }).pipe(
      tap(() => this.ticketCreado.next())
    );
  }
}