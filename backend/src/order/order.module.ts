import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from '../films/entities/film.entity';
import { Schedule } from '../films/entities/schedule.entity';
import { RepositoryData } from '../repository/repository.data';

@Module({
  imports: [TypeOrmModule.forFeature([Film, Schedule])],
  providers: [OrderService, RepositoryData],
  controllers: [OrderController],
})
export class OrderModule {}
