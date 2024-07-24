import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'This is the name of the employee to be displayed',
    example: 'Pranay Mehrotra'
  })
  id: string; // uuid

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  parentUserId: string; // Can be null
}
