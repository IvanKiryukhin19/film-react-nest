import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { orderMockData } from '../../test/mockData/orderData';
import { reservedMockSeats } from '../../test/mockData/reservedSeats';
import { RepositoryData } from '../../src/repository/repository.data';

describe('тестируем контролер заказов, вызывается ли метод', () => {
  let controller: OrderController;
  let orderService: OrderService;
  let mockRepositoryData: Partial<RepositoryData>;

  beforeEach(async () => {
    mockRepositoryData = {
      createOrder: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        OrderService,
        {
          provide: RepositoryData,
          useValue: mockRepositoryData,
        },
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  });

  it('тестируем вызывается ли метод с передаваемыми аргументами', async () => {
    jest.spyOn(orderService, 'takeSeats').mockResolvedValue({
      total: reservedMockSeats.length,
      items: reservedMockSeats,
    });

    await controller.createOrder(orderMockData);
    expect(orderService.takeSeats).toHaveBeenCalledWith(orderMockData.tickets);
  });
});
