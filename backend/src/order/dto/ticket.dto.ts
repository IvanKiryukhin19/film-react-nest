import { Max, IsString, IsNumber, IsInt, NotEquals } from 'class-validator';

export class GetTicketDto {
  @IsString()
  @NotEquals('')
  film: string;
  @IsString()
  @NotEquals('')
  session: string;
  @IsString()
  @NotEquals('')
  daytime: string;
  @IsString()
  @NotEquals('')
  day: string;
  @IsString()
  @NotEquals('')
  time: string;
  @IsInt()
  @Max(5)
  @NotEquals('')
  row: number;
  @IsInt()
  @Max(10)
  @NotEquals('')
  seat: number;
  @IsNumber()
  @NotEquals('')
  @NotEquals(null)
  price: number;
}
