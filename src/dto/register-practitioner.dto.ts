import { IsNegative, IsString } from 'class-validator';

export class RegisterRegisterPractitionerDto {
  @IsString()
  @IsNegative()
  resourceType: string;

  @IsString()
  @IsNegative()
  id: string;

  @IsString()
  @IsNegative()
  family: string;

  @IsString()
  @IsNegative()
  given: string;

  @IsString()
  @IsNegative()
  system: string;

  @IsString()
  @IsNegative()
  value: string;

  @IsString()
  @IsNegative()
  gender: string;

  @IsString()
  @IsNegative()
  birthDate: string;
}
