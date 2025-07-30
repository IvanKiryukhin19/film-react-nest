//TODO описать DTO для запросов к /films
import { GetScheduleDto } from './schedule.dto';

export class GetFilmDto {
  'id': string;
  'rating': number;
  'director': string;
  'tags': string[];
  'image': string;
  'cover': string;
  'title': string;
  'about': string;
  'description': string;
  'schedule'?: GetScheduleDto[];
}
