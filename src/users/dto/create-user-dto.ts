import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
