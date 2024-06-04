import { RegisterEncounterDto } from 'src/dto/register-encounter.dto';

export class RegisterEncounterMapper {
  public static toFormatObject(registerEncounterDto: RegisterEncounterDto) {
    return {
      resourceType: registerEncounterDto.resourceType,
      id: registerEncounterDto.id,
      class: [
        {
          coding: [
            {
              system: registerEncounterDto.class.syste,
              code: registerEncounterDto.class.code,
              display: registerEncounterDto.class.display,
            },
          ],
        },
      ],
      subject: {
        reference: registerEncounterDto.class.reference,
      },
      participant: [
        {
          type: [
            {
              coding: [
                {
                  system: registerEncounterDto.participant.syste,
                  code: registerEncounterDto.participant.code,
                  display: registerEncounterDto.participant.display,
                },
              ],
            },
          ],
          actor: {
            reference: registerEncounterDto.participant.reference,
          },
        },
      ],
    };
  }
}
