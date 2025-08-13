import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Film } from './film.entity';
import { Max, Min, IsPositive } from 'class-validator';

@Entity('schedules')
export class Schedule {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: string;

  @Column()
  daytime: string;

  @Column()
  hall: number;

  @Column()
  @Max(5)
  @Min(1)
  rows: number;

  @Column()
  @Max(10)
  @Min(1)
  seats: number;

  @Column({ type: 'double precision' })
  @IsPositive()
  price: number;

  @Column({ type: 'text' })
  taken: string;

  @Column({ type: 'uuid' })
  filmId: string;

  @ManyToOne(() => Film, (film) => film.schedules)
  @JoinColumn({ name: 'filmId', referencedColumnName: 'id' })
  film: Film;
}
