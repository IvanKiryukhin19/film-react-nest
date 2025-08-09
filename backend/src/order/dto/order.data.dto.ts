import {
  IsEmail,
  IsPhoneNumber,
  IsMobilePhone,
  ArrayMinSize,
} from 'class-validator';
import { GetTicketDto } from './ticket.dto';

export class GetOrderDataDto {
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  @IsMobilePhone()
  phone: string;
  @ArrayMinSize(1)
  tickets: GetTicketDto[];
}
