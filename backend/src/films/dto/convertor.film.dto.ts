import { GetFilmDto } from './films.dto';

export function dtoToFilmEntity(film: any): GetFilmDto {
  return {
    id: film.id,
    rating: film.rating,
    director: film.director,
    tags: film.tags,
    image: film.image,
    cover: film.cover,
    title: film.title,
    about: film.about,
    description: film.description,
    schedule: film.schedule,
  };
}
