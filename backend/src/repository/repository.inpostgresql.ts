import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../films/entities/film.entity';
import { Schedule } from '../films/entities/schedule.entity';
import { BadRequestException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { GetTicketDto } from 'src/order/dto/ticket.dto';
import { CreateOrderDto } from 'src/order/dto/order.dto';

@Injectable()
export class InPostgreSQLRepository {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async findAll(): Promise<any[]> {
    return await this.filmRepository.find();
  }

  async findById(id: string): Promise<any[]> {
    const film = await this.filmRepository.findOne({ where: { id } });

    if (!film) {
      throw new BadRequestException('Film not found');
    } else {
      return await this.scheduleRepository
        .createQueryBuilder('schedule')
        .where('schedule.filmId = :id', { id })
        .getMany();
    }
  }

  async createOrder(tickets: GetTicketDto[]): Promise<CreateOrderDto[]> {
    const orders = [];
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    for (const ticket of tickets) {
      if (!regex.test(ticket.film)) {
        throw new BadRequestException('Incorrect data type of film');
      }

      const session = await this.scheduleRepository
        .createQueryBuilder('schedule')
        .where('schedule.filmId = :filmId', { filmId: ticket.film })
        .andWhere('schedule.daytime = :daytime', { daytime: ticket.daytime })
        .getOne();

      if (!session) {
        throw new BadRequestException('Film or daytime not found');
      } else {
        if (session.taken.includes(`${ticket.row}:${ticket.seat}`)) {
          throw new BadRequestException('the place is already taken');
        } else {
          orders.push({ id: faker.string.uuid(), ...ticket });
          const separator = session.taken === '' ? '' : ',';
          session.taken += `${separator}${ticket.row}:${ticket.seat}`;
          await this.scheduleRepository.save(session);
        }
      }
    }

    return orders;
  }
}
