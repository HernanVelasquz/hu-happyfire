import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async findAllPacients() {
    try {
      const { data } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Patient`,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findByIdUser(id: string) {
    try {
      const { data, status } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Patient/${id}/_history/${id}`,
        ),
      );
      if (!data)
        throw new NotFoundException(
          `History for user with document ${id} not found`,
        );
      return {
        data,
        status,
      };
    } catch (error) {
      throw new NotFoundException(
        `History for user with document ${id} not found`,
      );
    }
  }

  async resgisterPacient(formatRegisterUser: any) {
    try {
      await this.findByIdUser(formatRegisterUser.id);

      const { data } = await lastValueFrom(
        this.httpService.post(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Patient`,
          formatRegisterUser,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllPractitioner() {
    try {
      const { data } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Practitioner`,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findByIdPractitioner(id: string) {
    try {
      const { data, status } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Practitioner/${id}`,
        ),
      );
      if (!data)
        throw new NotFoundException(
          `History for user with document ${id} not found`,
        );
      return {
        data,
        status,
      };
    } catch (error) {
      throw new NotFoundException(
        `History for user with document ${id} not found`,
      );
    }
  }
  async registerPractitioner(registerPractitioner: any) {
    try {
      const { data } = await lastValueFrom(
        this.httpService.post(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Practitioner`,
          registerPractitioner,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllEncounter() {
    try {
      const { data } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Encounter`,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findByIdEncounter(id: string) {
    try {
      const { data, status } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Encounter/${id}`,
        ),
      );
      if (!data)
        throw new NotFoundException(
          `History for user with document ${id} not found`,
        );
      return {
        data,
        status,
      };
    } catch (error) {
      throw new NotFoundException(
        `History for user with document ${id} not found`,
      );
    }
  }

  async registerEncounter(registerEncounterDto: any) {
    try {
      const { data } = await lastValueFrom(
        this.httpService.post(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Encounter`,
          registerEncounterDto,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllObservation() {
    try {
      const { data } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Observation`,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findByIdObservation(id: string) {
    try {
      const { data, status } = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Observation/${id}`,
        ),
      );
      if (!data)
        throw new NotFoundException(
          `History for user with document ${id} not found`,
        );
      return {
        data,
        status,
      };
    } catch (error) {
      throw new NotFoundException(
        `History for user with document ${id} not found`,
      );
    }
  }

  async registerObservation(registerObservationrDto: any) {
    try {
      const { data } = await lastValueFrom(
        this.httpService.post(
          `${this.configService.get('END_POINT_CONNECTION_FHIR')}/Observation`,
          registerObservationrDto,
        ),
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
