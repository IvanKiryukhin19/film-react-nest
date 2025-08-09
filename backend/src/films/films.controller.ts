import { Controller, Get, Param } from '@nestjs/common';
//import { InMemoryFilmRepository } from 'src/repository/repository.inmemory';
import { FilmsService } from './films.service';
import { GetFilmDto } from './dto/films.dto';
import { GetScheduleDto } from './dto/schedule.dto';

//import Film from '../model/film.schema'

@Controller('films')
export class FilmsController {
  constructor(private readonly filmService: FilmsService) {}

  @Get()
  async findAll(): Promise<{ total: number; items: GetFilmDto[] }> {
    return await this.filmService.findAll();
  }

  @Get(':id/schedule')
  async findOne(
    @Param('id') id: string,
  ): Promise<{ total: number; items: GetScheduleDto[] }> {
    return await this.filmService.findById(id);
  }
}
