import { RegisterObservationDto } from 'src/dto/register-observation.dto';

export class RegisterObservationMapper {
  public static toFormatObject(registerObservationDto: RegisterObservationDto) {
    return {
      resourceType: registerObservationDto.resourceType,
      category: [
        {
          coding: [
            {
              system: registerObservationDto.coding.system,
              code: registerObservationDto.coding.code,
              display: registerObservationDto.coding.display,
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: registerObservationDto.code.system,
            code: registerObservationDto.code.code,
            display: registerObservationDto.code.display,
          },
        ],
      },
      subject: {
        reference: registerObservationDto.subjectReference,
      },
      encounter: {
        reference: registerObservationDto.encounterReference,
      },
      performer: [
        {
          reference: registerObservationDto.performerReference,
        },
      ],
      effectiveDateTime: registerObservationDto.effectiveDateTime,
      valueQuantity: {
        value: registerObservationDto.valueQuantity.value,
        unit: registerObservationDto.valueQuantity.unit,
        system: registerObservationDto.valueQuantity.system,
        code: registerObservationDto.valueQuantity.code,
      },
    };
  }
}
