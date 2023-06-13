import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraCursoPrerequisitoService } from './carrera_curso_prerequisito.service';
import { CreateCarreraCursoPrerequisitoDto } from './dto/create-carrera_curso_prerequisito.dto';
import { UpdateCarreraCursoPrerequisitoDto } from './dto/update-carrera_curso_prerequisito.dto';

@Controller('carrera-curso-prerequisito')
export class CarreraCursoPrerequisitoController {
  constructor(private readonly carreraCursoPrerequisitoService: CarreraCursoPrerequisitoService) {}

  @Post()
  create(@Body() createCarreraCursoPrerequisitoDto: CreateCarreraCursoPrerequisitoDto) {
    return this.carreraCursoPrerequisitoService.create(createCarreraCursoPrerequisitoDto);
  }

  @Get()
  findAll() {
    return this.carreraCursoPrerequisitoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carreraCursoPrerequisitoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraCursoPrerequisitoDto: UpdateCarreraCursoPrerequisitoDto) {
    return this.carreraCursoPrerequisitoService.update(+id, updateCarreraCursoPrerequisitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraCursoPrerequisitoService.remove(+id);
  }
}
