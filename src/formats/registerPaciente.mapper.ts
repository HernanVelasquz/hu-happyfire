import { RegisterPacientrDto } from 'src/dto/register-user.dto';

export class RegisterPacienteMapper {
  public static toFormatObject(registerUserDto: RegisterPacientrDto) {
    return {
      resourceType: registerUserDto.resourceType,
      id: registerUserDto.id,
      name: [
        {
          given: [registerUserDto.given],
        },
      ],
      gender: registerUserDto.gender,
      birthDate: registerUserDto.birthDate,
    };
  }
}
