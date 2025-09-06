import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { RepositoryData } from '../repository/repository.data';
import { filmsMockData } from '../../test/mockData/filmsData';
import { scheduleMockData } from '../../test/mockData/scheduleData';

describe('тестируем сервис фильмов', () => {
  let filmsService: FilmsService;
  let mockRepositoryData: Partial<RepositoryData>;

  beforeEach(async () => {
    mockRepositoryData = {
      createOrder: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsService,
        {
          provide: RepositoryData,
          useValue: mockRepositoryData,
        },
      ],
    }).compile();

    filmsService = module.get<FilmsService>(FilmsService);
  });

  it('тестируем получение фильмов', async () => {
    mockRepositoryData.findAll = jest.fn().mockResolvedValue(filmsMockData);
    const result = await filmsService.findAll();
    expect(result).toEqual({
      total: filmsMockData.length,
      items: filmsMockData,
    });
  });

  it('тестируем получение сеансов по id', async () => {
    mockRepositoryData.findById = jest.fn().mockResolvedValue(scheduleMockData);
    const result = await filmsService.findById(filmsMockData[0].id);
    expect(result).toEqual({
      total: scheduleMockData.length,
      items: scheduleMockData,
    });
  });
});
