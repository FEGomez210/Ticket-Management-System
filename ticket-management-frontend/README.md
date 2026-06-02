# Ticket Management Frontend

This is the professional user interface for the Ticket Management System, built with **Angular** and **RxJS**. It provides a reactive dashboard for managing and monitoring support tickets in real-time.

## Prerequisites
Before running this project, ensure you have the following installed:
- **Node.js** (v18.x or higher)
- **Angular CLI** (v17.x or higher)
- **npm** (v9.x or higher)

---

## Installation & Setup

### Clone & Install Dependencies
Navigate to the frontend directory and install all required packages:
```bash
npm install

### Running the Application
Start the Angular development server:
Bash
ng serve
The application will boot up and be accessible at http://localhost:4200

### Engineering Architecture
Reactive State: Uses Subject and Observable from RxJS to ensure the ticket list updates automatically when a new ticket is created or updated.

Service Layer: Centralized logic in TicketService to handle asynchronous HttpClient requests to the NestJS API.

Component-Based UI: Modular components for ticket listing and form submission to improve maintainability.

### History & Technical Documentation (Conventional Commits Log)
- chore(init): Initialize Angular project with strict type checking enabled.

- feat(models): Define internal Ticket interface to match backend entity schema.

- feat(service): Implement TicketService using HttpClient to establish RESTful communication with the API.

- feat(reactive): Implement RxJS Subject within TicketService for cross-component communication (triggering list reloads).

- feat(components): Build TicketListComponent and TicketFormComponent with reactive form bindings.

- feat(ui): Integrate status update logic using PATCH requests to synchronize frontend state with PostgreSQL.

- test(ui): Perform functional validation of component lifecycle hooks and async subscription management.
