import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrerequisitoCursoService } from './prerequisito_curso.service';
import { CreatePrerequisitoCursoDto } from './dto/create-prerequisito_curso.dto';
import { UpdatePrerequisitoCursoDto } from './dto/update-prerequisito_curso.dto';

@Controller('prerequisito-curso')
export class PrerequisitoCursoController {
  constructor(private readonly prerequisitoCursoService: PrerequisitoCursoService) {}

  @Post()
  create(@Body() createPrerequisitoCursoDto: CreatePrerequisitoCursoDto) {
    return this.prerequisitoCursoService.create(createPrerequisitoCursoDto);
  }

  @Get()
  findAll() {
    return this.prerequisitoCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prerequisitoCursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrerequisitoCursoDto: UpdatePrerequisitoCursoDto) {
    return this.prerequisitoCursoService.update(+id, updatePrerequisitoCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prerequisitoCursoService.remove(+id);
  }
}
