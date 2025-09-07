import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { RepositoryData } from '../../src/repository/repository.data';
import { filmsMockData } from '../../test/mockData/filmsData';
import { scheduleMockData } from '../../test/mockData/scheduleData';

describe('тестируем контролер фильмов, вызывается ли метод', () => {
  let filmsController: FilmsController;
  let filmsService: FilmsService;
  let mockRepositoryData: Partial<RepositoryData>;

  beforeEach(async () => {
    mockRepositoryData = {
      createOrder: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [
        FilmsService,
        {
          provide: RepositoryData,
          useValue: mockRepositoryData,
        },
      ],
    }).compile();

    filmsController = module.get<FilmsController>(FilmsController);
    filmsService = module.get<FilmsService>(FilmsService);
  });

  it('тестируем вызывается ли метод findAll', async () => {
    jest.spyOn(filmsService, 'findAll').mockResolvedValue({
      total: filmsMockData.length,
      items: filmsMockData,
    });

    await filmsController.findAll();
    expect(filmsService.findAll).toHaveBeenCalled();
  });

  it('тестируем вызывается ли метод findOne с нужным аргументом', async () => {
    jest.spyOn(filmsService, 'findById').mockResolvedValue({
      total: scheduleMockData.length,
      items: scheduleMockData,
    });

    await filmsController.findOne(filmsMockData[0].id);
    expect(filmsService.findById).toHaveBeenCalledWith(filmsMockData[0].id);
  });
});
