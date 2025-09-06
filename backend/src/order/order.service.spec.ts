import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { RepositoryData } from '../repository/repository.data';
import { GetTicketDto } from './dto/ticket.dto';
import { orderMockData } from '../../test/mockData/orderData';
import { reservedMockSeats } from '../../test/mockData/reservedSeats';

describe('тестируем сервис заказов', () => {
  let orderService: OrderService;
  let mockRepositoryData: Partial<RepositoryData>;

  beforeEach(async () => {
    mockRepositoryData = {
      createOrder: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: RepositoryData,
          useValue: mockRepositoryData,
        },
      ],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
  });

  it('тестируем успешное создание заказа', async () => {
    // Подготавливаем тестовые данные
    const tickets: GetTicketDto[] = orderMockData.tickets;

    // Настройка мока для createOrder
    mockRepositoryData.createOrder = jest
      .fn()
      .mockResolvedValue(reservedMockSeats);

    // Вызываем метод takeSeats
    const result = await orderService.takeSeats(tickets);

    // Проверяем результат
    expect(result).toEqual({
      total: reservedMockSeats.length,
      items: reservedMockSeats,
    });
  });

  it('тестируем возврат ошибки с некорректными данными', async () => {
    // Настройка мока для имитации ошибки
    mockRepositoryData.createOrder = jest
      .fn()
      .mockResolvedValue(new Error('Incorrect data of order'));

    try {
      await orderService.takeSeats([]);
      //await mockRepositoryData.createOrder([]);
    } catch (error) {
      expect(error.message).toBe('Incorrect data of order'); // Проверка сообщения об ошибке
    }
  });
});

/* import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { RepositoryData } from '../repository/repository.data';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //createOrder
}); */

/* import { jest } from 'jest';

const mockInPostgreSQLRepository = {
  createOrder: jest.fn(),
};

// Задаём возвращаемое значение для метода createOrder
mockInPostgreSQLRepository.createOrder.mockResolvedValue([
  // Ваши тестовые данные, например:
  { id: 'uuid-1', film: 'film-id-1', daytime: '2023-10-05T18:00:00', row: 1, seat: 2 },
]); */

/* describe('InPostgreSQLRepository', () => {
  let mockInPostgreSQLRepository: any;

  beforeEach(() => {
    mockInPostgreSQLRepository = {
      createOrder: jest.fn(),
    };
  });

  it('should handle errors when creating an order', async () => {
    // Настройка мока для имитации ошибки
    mockInPostgreSQLRepository.createOrder.mockRejectedValue(new Error('Incorrect data type of film'));

    try {
      await mockInPostgreSQLRepository.createOrder([]); // Вызов метода с некорректными данными
    } catch (error) {
      expect(error.message).toBe('Incorrect data type of film'); // Проверка сообщения об ошибке
    }
  });
}); */

/* import { Test, TestingModule } from '@nestjs/testing';
import { InPostgreSQLRepository } from './in-postgresql.repository';

describe('InPostgreSQLRepository', () => {
  let repository: InPostgreSQLRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InPostgreSQLRepository],
    }).compile();

    repository = module.get<InPostgreSQLRepository>(InPostgreSQLRepository);
  });

  it('should create an order successfully', async () => {
    // Подготавливаем тестовые данные
    const tickets: GetTicketDto[] = [
      { film: 'film-id-1', daytime: '2023-10-05T18:00:00', row: 1, seat: 2 },
    ];

    // Вызываем метод createOrder
    const orders = await repository.createOrder(tickets);

    // Проверяем результат
    expect(orders).toEqual([
      { id: expect.any(String), ...tickets[0] },
    ]);
  });
}); */
