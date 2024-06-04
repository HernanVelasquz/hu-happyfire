import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { RegisterPacienteMapper } from './formats/registerPaciente.mapper';
import { RegisterPacientrDto } from './dto/register-user.dto';
import { RegisterRegisterPractitionerDto } from './dto/register-practitioner.dto';
import { RegisterPractitionerMapper } from './formats/registerPractitioner.mapper';
import { RegisterEncounterMapper } from './formats/registerEncounter.mapper';
import { RegisterEncounterDto } from './dto/register-encounter.dto';
import { RegisterObservationDto } from './dto/register-observation.dto';
import { RegisterObservationMapper } from './formats/registerObservation.mapper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('patient')
  async finaAllPacients() {
    return await this.appService.findAllPacients();
  }

  @Get('patient/:id')
  async findByIdHistory(@Param('id') id: string) {
    return await this.appService.findByIdUser(id);
  }

  @Post('paciente')
  async registerPaciente(@Body() registerPacienteDto: RegisterPacientrDto) {
    const formatRegisterPacient =
      RegisterPacienteMapper.toFormatObject(registerPacienteDto);
    return await this.appService.resgisterPacient(formatRegisterPacient);
  }

  @Get('practitioner')
  async finaAllPractitioner() {
    return await this.appService.findAllPractitioner();
  }

  @Get('practitioner/:id')
  async findByIdPractitioner(@Param('id') id: string) {
    return await this.appService.findByIdPractitioner(id);
  }

  @Post('practitioner')
  async registerPractitioner(
    @Body()
    registerRegisterPractitionerDto: RegisterRegisterPractitionerDto,
  ) {
    const mapper = RegisterPractitionerMapper.toFormatObject(
      registerRegisterPractitionerDto,
    );
    return await this.appService.registerPractitioner(mapper);
  }

  @Get('encounter')
  async finaAllEncounter() {
    return await this.appService.findAllEncounter();
  }

  @Get('encounter/:id')
  async findByIdPEncounter(@Param('id') id: string) {
    return await this.appService.findByIdEncounter(id);
  }

  @Post('encounter')
  async registerEncounter(
    @Body()
    registerEncounterDto: RegisterEncounterDto,
  ) {
    const mapper = RegisterEncounterMapper.toFormatObject(registerEncounterDto);
    return await this.appService.registerEncounter(mapper);
  }

  @Get('observation')
  async finaAllObservation() {
    return await this.appService.findAllEncounter();
  }

  @Get('observation/:id')
  async findByIdPObservation(@Param('id') id: string) {
    return await this.appService.findByIdEncounter(id);
  }

  @Post('observation')
  async registerObservation(
    @Body()
    registerObservationDto: RegisterObservationDto,
  ) {
    const mapper = RegisterObservationMapper.toFormatObject(
      registerObservationDto,
    );
    return await this.appService.registerObservation(mapper);
  }
}
