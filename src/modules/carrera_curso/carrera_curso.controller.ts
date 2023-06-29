import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CarreraCursoService } from './carrera_curso.service';
import { CreateCarreraCursoDto } from './dto/create-carrera_curso.dto';
import { UpdateCarreraCursoDto } from './dto/update-carrera_curso.dto';
import { ResponseInterceptor } from 'src/interceptors/response/response.interceptor';

@Controller('carrera-curso')
@UseInterceptors(new ResponseInterceptor('Success', 'Ha ocurrido un error'))
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

  @Get(':carrera/:semestre')
  cursosSemestre(@Param('carrera') carrera: string, @Param('semestre') semestre: string) {
    return this.carreraCursoService.cursosCarreraSemestre(+carrera, +semestre);
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
