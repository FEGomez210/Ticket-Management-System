export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  assigneeId?: number | null;
  createdAt?: string;
}
