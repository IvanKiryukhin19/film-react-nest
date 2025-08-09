import { GetFilmDto } from 'src/films/dto/films.dto';
import { BadRequestException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { GetTicketDto } from 'src/order/dto/ticket.dto';
import { CreateOrderDto } from 'src/order/dto/order.dto';

export class InMemoryFilmRepository {
  private films: GetFilmDto[] = [];

  constructor() {
    //первоначальные данные
    this.films = [
      {
        id: '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',
        rating: 2.9,
        director: 'Итан Райт',
        tags: ['Документальный'],
        image: '/bg1s.jpg',
        cover: '/bg1c.jpg',
        title: 'Архитекторы общества',
        about:
          'Документальный фильм, исследующий влияние искусственного интеллекта на общество и этические, философские и социальные последствия технологии.',
        description:
          'Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.',
        schedule: [
          {
            id: 'f2e429b0-685d-41f8-a8cd-1d8cb63b99ce',
            daytime: '2024-06-28T10:00:53+03:00',
            hall: 0,
            rows: 5,
            seats: 10,
            price: 450,
            taken: ['2:2', '5:5'],
          },
          {
            id: '5beec101-acbb-4158-adc6-d855716b44a8',
            daytime: '2024-06-28T14:00:53+03:00',
            hall: 1,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '89ee32f3-8164-40a6-b237-f4d492450250',
            daytime: '2024-06-28T16:00:53+03:00',
            hall: 2,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: 'd6a4ed9b-51d6-4df2-b66e-d75175deb373',
            daytime: '2024-06-29T11:00:53+03:00',
            hall: 0,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: 'a8af36c3-65ee-4224-a77d-c9ebb790ba66',
            daytime: '2024-06-29T15:00:53+03:00',
            hall: 1,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '0cf8b68c-fcf2-4c0a-97ba-45990231fa0e',
            daytime: '2024-06-29T17:00:53+03:00',
            hall: 2,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '2519ca34-32b4-4a7f-971d-3bb585c6450b',
            daytime: '2024-06-30T12:00:53+03:00',
            hall: 0,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: 'b105ad4b-ecd2-4556-abaf-9a95403dc01c',
            daytime: '2024-06-30T16:00:53+03:00',
            hall: 1,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '02a9feb2-fc92-4386-a917-aa79e7f8fd7f',
            daytime: '2024-06-30T18:00:53+03:00',
            hall: 2,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
        ],
      },
      {
        id: '51b4bc85-646d-47fc-b988-3e7051a9fe9e',
        rating: 9,
        director: 'Харрисон Рид',
        tags: ['Рекомендуемые'],
        image: '/bg3s.jpg',
        cover: '/bg3c.jpg',
        title: 'Недостижимая утопия',
        about:
          'Провокационный фильм-антиутопия, исследующий темы свободы, контроля и цены совершенства.',
        description:
          'Провокационный фильм-антиутопия режиссера Харрисона Рида. Действие фильма разворачивается в, казалось бы, идеальном обществе, и рассказывает о группе граждан, которые начинают подвергать сомнению систему. Фильм исследует темы свободы, контроля и цены совершенства.',
        schedule: [
          {
            id: '9647fcf2-d0fa-4e69-ad90-2b23cff15449',
            daytime: '2024-06-28T10:00:53+03:00',
            hall: 0,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '9f2db237-01d0-463e-a150-89f30bfc4250',
            daytime: '2024-06-28T14:00:53+03:00',
            hall: 1,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '3d5f5d12-b4d8-44d3-a440-1b91616fda40',
            daytime: '2024-06-28T16:00:53+03:00',
            hall: 2,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '7f59de0d-62b2-412f-9e0b-bf6e971c44e5',
            daytime: '2024-06-29T11:00:53+03:00',
            hall: 0,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '65f4a65e-1bc1-4677-842b-10e9b317b287',
            daytime: '2024-06-29T15:00:53+03:00',
            hall: 1,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: 'b3ba6b69-050e-498c-9cdb-92711d8e4180',
            daytime: '2024-06-29T17:00:53+03:00',
            hall: 2,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: 'd87ee9ab-4d84-43bb-85d6-f71aced22f73',
            daytime: '2024-06-30T12:00:53+03:00',
            hall: 0,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: 'eed1469f-c95e-428a-870d-13cbfe4ac2ac',
            daytime: '2024-06-30T16:00:53+03:00',
            hall: 1,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
          {
            id: '68437c84-6c35-4203-bff7-021d16042a6b',
            daytime: '2024-06-30T18:00:53+03:00',
            hall: 2,
            rows: 5,
            seats: 10,
            price: 350,
            taken: [],
          },
        ],
      },
    ];
  }

  async findAll(): Promise<GetFilmDto[]> {
    return this.films;
  }

  async findById(id: string): Promise<GetFilmDto | undefined> {
    const movie = this.films.find((film) => film.id === id);
    if (movie) {
      return movie;
    }
    throw new BadRequestException('Film not found');
  }

  async createOrder(tickets: GetTicketDto[]): Promise<CreateOrderDto[]> {
    const orders = [];

    for (const ticket of tickets) {
      const filmSchedules = (await this.findById(ticket.film)).schedule;
      if (
        !filmSchedules.find((schedule) => schedule.daytime === ticket.daytime)
      ) {
        throw new BadRequestException('Daytime doesnt exists');
      }

      for (const schedule of filmSchedules) {
        if (schedule.daytime === ticket.daytime) {
          if (
            schedule.taken.find(
              (seat) => seat === `${ticket.row}:${ticket.seat}`,
            )
          ) {
            throw new BadRequestException('the place is already taken');
          } else {
            orders.push({ id: faker.string.uuid(), ...ticket });
            schedule.taken.push(`${ticket.row}:${ticket.seat}`);
          }
          break;
        }
      }
    }

    return orders;
  }
}
