import { Injectable } from '@nestjs/common';
import { RepositoryData } from '../repository/repository.data';

@Injectable()
export class FilmsService {
  constructor(private filmsData: RepositoryData) {}

  async findAll() {
    const movies = (await this.filmsData.findAll()).map((film) => {
      const { schedule, ...others } = film;
      return others;
    });

    return { total: movies.length, items: movies };
  }

  async findById(id: string) {
    const movie = await this.filmsData.findById(id);
    return { total: movie.length, items: movie };
    //return { total: movie.schedule.length, items: movie.schedule };
  }
}
