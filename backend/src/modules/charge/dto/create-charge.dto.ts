import { ApiProperty } from '@nestjs/swagger';

export class CreateChargeDto {
  @ApiProperty()
  paymentMethodId: string;

  @ApiProperty()
  amount: number;
}
