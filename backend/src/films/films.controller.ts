import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';
import { GetFilmDto } from './dto/films.dto';
import { GetScheduleDto } from './dto/schedule.dto';

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
