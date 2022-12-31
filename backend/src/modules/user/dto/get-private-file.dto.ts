import { ApiProperty } from '@nestjs/swagger';

export class GetPrivateFileDto {
  @ApiProperty()
  id: string;
}
