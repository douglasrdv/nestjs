import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'Unique identifier for the user',
        example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      })
      @IsUUID()
      @IsNotEmpty()
      id: string;
    
      @ApiProperty({
        description: 'Username of the user',
        example: 'john_doe',
      })
      @IsString()
      @IsNotEmpty()
      username: string;
    
      @ApiProperty({
        description: 'Password of the user',
        example: 'securePassword123',
      })
      @IsString()
      @IsNotEmpty()
      password: string;
    
      @ApiProperty({
        description: 'Parent user ID, if applicable',
        example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        required: false,
        nullable: true,
      })
      @IsUUID()
      @IsOptional()
      parentUserId?: string | null;
}
