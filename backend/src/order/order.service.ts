import { Injectable } from '@nestjs/common';
import { GetTicketDto } from './dto/ticket.dto';
import { RepositoryData } from '../repository/repository.data';

@Injectable()
export class OrderService {
  constructor(private filmsData: RepositoryData) {}

  async takeSeats(tickets: GetTicketDto[]) {
    const orders = await this.filmsData.createOrder(tickets);

    return { total: orders.length, items: orders };
  }
}
