# Ticket Management System - Fullstack Application

## scope: fullstack-integration

This repository contains a complete support ticket management system, featuring a robust backend API and a reactive frontend dashboard.

## Architecture
- **Backend (`/ticket-management-backend`):** NestJS REST API with Prisma ORM and PostgreSQL.
- **Frontend (`/ticket-management-frontend`):** Angular SPA with RxJS for reactive state management.

## Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- Angular CLI (`npm install -g @angular/cli`)

## 🛠 Project Setup

### 1. Backend Configuration
1. Navigate to the backend folder:
   ```bash
   cd ticket-management-backend
Install dependencies:

Bash
npm installSet up your .env file with DATABASE_URL and run migrations:

Bash
npx prisma migrate dev --name init
Start the server:

Bash
npm run start:dev2. Frontend Configuration
Navigate to the frontend folder:

Bash
cd ticket-management-frontend
Install dependencies:

Bash
npm install
Start the application:

Bash
ng serve


🚀 Key Features
Centralized Data: Professional CRUD operations for ticket lifecycle management.

Reactive UI: Instant updates via RxJS Subjects and observables.

Type Safety: Strict typing across the full stack using TypeScript.

👤 Author
Fernando Emilio Gómez Licenciatura en Sistemas de Información | UADER FCyT
