import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraCursoService } from './carrera_curso.service';
import { CreateCarreraCursoDto } from './dto/create-carrera_curso.dto';
import { UpdateCarreraCursoDto } from './dto/update-carrera_curso.dto';

@Controller('carrera-curso')
export class CarreraCursoController {
  constructor(private readonly carreraCursoService: CarreraCursoService) {}

  @Post()
  create(@Body() createCarreraCursoDto: CreateCarreraCursoDto) {
    return this.carreraCursoService.create(createCarreraCursoDto);
  }

  @Get()
  findAll() {
    return this.carreraCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carreraCursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraCursoDto: UpdateCarreraCursoDto) {
    return this.carreraCursoService.update(+id, updateCarreraCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraCursoService.remove(+id);
  }
}
