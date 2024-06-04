import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Coding {
  @IsString()
  @IsNotEmpty()
  system: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  display: string;
}

class ValueQuantityDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsString()
  @IsNotEmpty()
  system: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
export class RegisterObservationDto {
  @IsString()
  @IsNotEmpty()
  resourceType: string;

  @ValidateNested({ each: true })
  @Type(() => Coding)
  coding: Coding;

  @ValidateNested({ each: true })
  @Type(() => Coding)
  code: Coding;

  @IsString()
  @IsNotEmpty()
  subjectReference: string;

  @IsString()
  @IsNotEmpty()
  encounterReference: string;

  @IsString()
  @IsNotEmpty()
  performerReference: string;

  @IsString()
  @IsNotEmpty()
  effectiveDateTime: string;

  @ValidateNested({ each: true })
  @Type(() => ValueQuantityDto)
  valueQuantity: ValueQuantityDto;
}
