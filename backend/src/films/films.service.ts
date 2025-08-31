import { Injectable } from '@nestjs/common';
import { RepositoryData } from '../repository/repository.data';

@Injectable()
export class FilmsService {
  constructor(private filmsData: RepositoryData) {}

  async findAll() {
    const movies = await this.filmsData.findAll();
    /* const movies = (await this.filmsData.findAll()).map((film) => {
      const { schedule, ...others } = film;
      return others;
    }); */

    return { total: movies.length, items: movies };
  }

  async findById(id: string) {
    const movie = await this.filmsData.findById(id);
    return { total: movie.length, items: movie };
    //return { total: movie.schedule.length, items: movie.schedule };
  }
}

/* const body = JSON.stringify({
    "email": "Lelah.Bernier5@yahoo.com",
       "phone": "+7 (999) 999-99-99",
       "tickets": [{
           "film": "",
           "session": "",
           "daytime": "",
           "row": 1,
           "seat": 1,
           "price":null 
       }]
})
const xhr=new XMLHttpRequest()
xhr.open('POST', 'http://localhost:3000/api/afisha/order',false);
xhr.setRequestHeader('Content-Type','application/json; charset=utf-8');
xhr.send(body) */
