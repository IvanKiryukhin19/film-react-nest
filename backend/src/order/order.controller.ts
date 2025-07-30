import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import type { GetOrderDataDto } from './dto/order.data.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post()
  async createOrder(
    @Body() orderData: GetOrderDataDto,
  ): Promise<{ total: number; items: CreateOrderDto[] }> {
    return await this.orderService.takeSeats(orderData.tickets);
  }
}
