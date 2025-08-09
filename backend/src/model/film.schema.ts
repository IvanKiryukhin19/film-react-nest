import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { model } from 'mongoose';

@Schema()
class Schedule {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  daytime: string;
  @Prop({ required: true })
  hall: number;
  @Prop({
    required: true,
    validate: {
      validator: (value: number) => value >= 1 && value <= 5,
      message: 'Rows must be between 1 and 5',
    },
  })
  rows: number;
  @Prop({
    required: true,
    validate: {
      validator: (value: number) => value >= 1 && value <= 10,
      message: 'Seats must be between 1 and 10',
    },
  })
  seats: number;
  @Prop({ required: true })
  price: number;
  @Prop([{ type: String, required: true }])
  taken: string[];
}

const ScheduleSchema = SchemaFactory.createForClass(Schedule);

@Schema()
class Film {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  rating: number;
  @Prop({ required: true })
  director: string;
  @Prop([{ type: String, required: true }])
  tags: string[];
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  cover: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  about: string;
  @Prop({ required: true })
  description: string;
  @Prop([ScheduleSchema])
  schedule: Schedule[];
}

const FilmSchema = SchemaFactory.createForClass(Film);

export default model('film', FilmSchema);

/* const body = JSON.stringify({
    "email": "kirivn@yandex.ru",
    "phone": "1565165161616516516515",
    "tickets": [
        {
            "film": "0e33c7f6-27a7-4aa0-8e61-65d7e5effecf",
            "session": "f2e429b0-685d-41f8-a8cd-1d8cb63b99ce",
            "daytime": "2024-06-28T10:00:53+03:00",
            "day": "28 июня",
            "time": "10:00",
            "row": 1,
            "seat": 10,
            "price": 350
        },
        {
            "film": "0e33c7f6-27a7-4aa0-8e61-65d7e5effecf",
            "session": "f2e429b0-685d-41f8-a8cd-1d8cb63b99ce",
            "daytime": "2024-06-28T10:00:53+03:00",
            "day": "28 июня",
            "time": "10:00",
            "row": 2,
            "seat": 10,
            "price": 350
        }
    ]
})
const xhr=new XMLHttpRequest()
xhr.open('POST', 'http://localhost:3000/api/afisha/order',false);
xhr.setRequestHeader('Content-Type','application/json; charset=utf-8');
xhr.send(body) */
