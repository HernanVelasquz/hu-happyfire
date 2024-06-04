import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class Coding {
  @IsString()
  @IsNotEmpty()
  syste: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  display: string;

  @IsString()
  @IsNotEmpty()
  reference: string;
}

export class RegisterEncounterDto {
  @IsString()
  @IsNotEmpty()
  resourceType: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => Coding)
  class: Coding;

  @ValidateNested({ each: true })
  @Type(() => Coding)
  participant: Coding;
}
