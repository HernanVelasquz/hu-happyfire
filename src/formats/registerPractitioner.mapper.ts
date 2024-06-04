import { RegisterRegisterPractitionerDto } from 'src/dto/register-practitioner.dto';

export class RegisterPractitionerMapper {
  public static toFormatObject(
    registerRegisterPractitioner: RegisterRegisterPractitionerDto,
  ) {
    return {
      resourceType: registerRegisterPractitioner.resourceType,
      id: registerRegisterPractitioner.id,
      name: [
        {
          family: registerRegisterPractitioner.family,
          given: [registerRegisterPractitioner.given],
        },
      ],
      telecom: [
        {
          system: registerRegisterPractitioner.system,
          value: registerRegisterPractitioner.value,
        },
      ],
      gender: registerRegisterPractitioner.gender,
      birthDate: registerRegisterPractitioner.birthDate,
    };
  }
}
