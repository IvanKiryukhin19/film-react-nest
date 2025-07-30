import { dtoToFilmEntity } from 'src/films/dto/convertor.film.dto';
import { GetFilmDto } from 'src/films/dto/films.dto';
import { GetTicketDto } from 'src/order/dto/ticket.dto';
import { CreateOrderDto } from 'src/order/dto/order.dto';
import Film from '../model/film.schema';
import { BadRequestException } from '@nestjs/common';
import { faker } from '@faker-js/faker';

export class InMongoDBRepository {
  constructor() {}

  async findAll(): Promise<GetFilmDto[]> {
    const filmsFromDB = await Film.find({});
    return filmsFromDB.map((film) => dtoToFilmEntity(film));
  }

  async findById(id: string) {
    const film = await Film.findOne({ id: id });
    if (film) {
      return dtoToFilmEntity(film);
    } else {
      throw new BadRequestException('Film not found');
    }
  }

  async createOrder(tickets: GetTicketDto[]): Promise<CreateOrderDto[]> {
    const orders = [];

    for (const ticket of tickets) {
      const movie = await Film.findOne({ id: ticket.film });
      const filmSchedules = movie.schedule as any;
      if (
        !filmSchedules.find((schedule) => schedule.daytime === ticket.daytime)
      ) {
        throw new BadRequestException('Daytime doesnt exists');
      }

      for (const schedule of filmSchedules) {
        if (schedule.daytime === ticket.daytime) {
          if (
            schedule.taken.find(
              (seat: string) => seat === `${ticket.row}:${ticket.seat}`,
            )
          ) {
            throw new BadRequestException('the place is already taken');
          } else {
            orders.push({ id: faker.string.uuid(), ...ticket });
            schedule.taken.push(`${ticket.row}:${ticket.seat}`);
            await movie.save();
          }
          break;
        }
      }
    }

    return orders;
  }
}
