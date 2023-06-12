import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './entities/carrera.entity';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @ApiOkResponse({ description: 'Retorna todas las carreras', type: Carrera, isArray: true })
  @Get()
  findAll() {
    return this.carreraService.findAll();
  }

  @ApiParam({ name: 'codigo', type: 'string' })
  @ApiOkResponse({ description: 'Returns la carrera con el codigo especificado', type: Carrera })
  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.carreraService.findOne(+codigo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.update(+id, updateCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraService.remove(+id);
  }
}
