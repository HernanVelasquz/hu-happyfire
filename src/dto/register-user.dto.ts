import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterPacientrDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  resourceType: string;

  @IsString()
  @IsNotEmpty()
  given: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;
}
