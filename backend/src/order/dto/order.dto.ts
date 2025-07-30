//TODO реализовать DTO для /orders
import { GetTicketDto } from './ticket.dto';

export class CreateOrderDto extends GetTicketDto {
  'id': string;
}
