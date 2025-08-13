import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Film } from './film.entity';
import { Max, Min, IsPositive, NotEquals } from 'class-validator';

@Entity('schedules')
export class Schedule {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  @NotEquals('')
  id: string;

  @Column()
  @NotEquals('')
  daytime: string;

  @Column()
  @NotEquals('')
  hall: number;

  @Column()
  @Max(5)
  @Min(1)
  @NotEquals('')
  rows: number;

  @Column()
  @Max(10)
  @Min(1)
  @NotEquals('')
  seats: number;

  @Column({ type: 'double precision' })
  @IsPositive()
  @NotEquals('')
  @NotEquals(null)
  price: number;

  @Column({ type: 'text' })
  @NotEquals('')
  taken: string;

  @Column({ type: 'uuid' })
  @NotEquals('')
  filmId: string;

  @ManyToOne(() => Film, (film) => film.schedules)
  @JoinColumn({ name: 'filmId', referencedColumnName: 'id' })
  film: Film;
}
