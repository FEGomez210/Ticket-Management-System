# Ticket Management Backend

This is a professional RESTful API built with **NestJS**, **Prisma ORM**, and **PostgreSQL** designed for managing technical support tickets.

## Prerequisites
Before running this project, ensure you have the following installed:
- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher)
- **PostgreSQL** (v14.x or higher) running locally on port 5432

---

##  Installation & Setup

### 1. Clone & Install Dependencies
Navigate to the project root directory and install all required packages:
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory of the project and define your database connection URL. Replace `YOUR_PASSWORD` with your actual local PostgreSQL password:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/ticket_management?schema=public"
```

### 3. Database Migrations
Run the Prisma migration tool to generate the database schema and create the tables (`User` and `Ticket`) inside your PostgreSQL instance:
```bash
npx prisma migrate dev --name init
```

### 4. Running the Application
Start the NestJS application in development watch mode:
```bash
npm run start:dev
```
The server will boot up and listen for incoming HTTP requests at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint | Description | Expected Payload (JSON) |
| :--- | :--- | :--- | :--- |
| **POST** | `/tickets` | Creates a new ticket. | `{"title": "string", "description": "string", "status": "OPEN"}` |
| **GET** | `/tickets` | Retrieves a list of all tickets. | *None* |
| **GET** | `/tickets/:id` | Retrieves a specific ticket by its numerical ID. | *None* |
| **PATCH** | `/tickets/:id` | Updates an existing ticket's status or assignment. | `{"status": "IN_PROGRESS", "assigneeId": 1}` |

### Test Example (POST /tickets)
Using **Postman** or **Thunder Client**, send a `POST` request to `http://localhost:3000/tickets` with the following raw JSON body:
```json
{
  "title": "Problema con la impresora",
  "description": "La impresora del piso 2 no tiene tinta",
  "status": "OPEN"
}
```
**Response (201 Created):**
```json
{
  "id": 1,
  "title": "Problema con la impresora",
  "description": "La impresora del piso 2 no tiene tinta",
  "status": "OPEN",
  "assigneeId": null,
  "createdAt": "2026-06-02T01:05:10.743Z"
}
```

---

##  History & Technical Documentation (Conventional Commits Log)
Below is the structured registry of the entire engineering cycle implemented during this project's development.

- `chore(init):` Initialize the base project ecosystem using NestJS CLI.
- `feat(database):` Create and provision the relational database `ticket_management` in a local PostgreSQL server.
- `feat(prisma):` Strictly model data in `schema.prisma` defining relational entities `User` and `Ticket` with associated constraints.
- `fix(prisma):` Perform controlled technical downgrade of Prisma ORM from v7.8.0 to v5.22.0 to ensure stability of native `env()` directive and remove surplus configuration files (`prisma.config.ts`).
- `feat(prisma):` Successfully execute migration engine and automatically inject database client at binary level into `node_modules`.
- `feat(modules):` Automatically generate NestJS modular architecture to isolate domain logic (`prisma` and `tickets`).
- `feat(prisma):` Implement global injectable pattern for `PrismaService`, extending `PrismaClient` to automate connection during server lifecycle (`onModuleInit`).
- `feat(tickets):` Create data transfer objects (`CreateTicketDto` and `UpdateTicketDto`) applying strict definite assignment assertions (`!`) in TypeScript.
- `feat(tickets):` Program business logic layer in `TicketsService` encapsulating CRUD persistence methods through the ORM.
- `feat(tickets):` Design and expose RESTful HTTP routes in `TicketsController` using native NestJS decorators (`@Post`, `@Get`, `@Patch`).
- `test(api):` Perform comprehensive end-to-end (E2E) functional validation via asynchronous HTTP requests in Postman, verifying standard status codes (201 Created).