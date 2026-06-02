import { Component } from '@angular/core';
import { TicketListComponent } from './components/ticket-list/ticket-list';
import { TicketForm } from './components/ticket-form/ticket-form';

@Component({
  selector: 'app-root',
  standalone: true,
  // Lo agregamos a los imports
  imports: [TicketListComponent, TicketForm] ,
  templateUrl: './app.html', /* o ./app.component.html dependiendo de cómo se llame tu archivo HTML */
  styleUrl: './app.css' /* o ./app.component.css */
})
export class App {
  title = 'ticket-management-frontend';
}
