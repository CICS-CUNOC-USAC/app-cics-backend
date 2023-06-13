import { Injectable } from '@nestjs/common';
import { CreatePrerequisitoCursoDto } from './dto/create-prerequisito_curso.dto';
import { UpdatePrerequisitoCursoDto } from './dto/update-prerequisito_curso.dto';

@Injectable()
export class PrerequisitoCursoService {
  create(createPrerequisitoCursoDto: CreatePrerequisitoCursoDto) {
    return 'This action adds a new prerequisitoCurso';
  }

  findAll() {
    return `This action returns all prerequisitoCurso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prerequisitoCurso`;
  }

  update(id: number, updatePrerequisitoCursoDto: UpdatePrerequisitoCursoDto) {
    return `This action updates a #${id} prerequisitoCurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} prerequisitoCurso`;
  }
}
