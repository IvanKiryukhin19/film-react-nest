import { Max, IsString, IsNumber, IsInt } from 'class-validator';

export class GetTicketDto {
  @IsString()
  film: string;
  @IsString()
  session: string;
  @IsString()
  daytime: string;
  @IsString()
  day: string;
  @IsString()
  time: string;
  @IsInt()
  @Max(5)
  row: number;
  @IsInt()
  @Max(10)
  seat: number;
  @IsNumber()
  price: number;
}
