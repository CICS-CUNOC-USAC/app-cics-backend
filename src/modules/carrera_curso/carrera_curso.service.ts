import { Injectable } from '@nestjs/common';
import { CreateCarreraCursoDto } from './dto/create-carrera_curso.dto';
import { UpdateCarreraCursoDto } from './dto/update-carrera_curso.dto';

@Injectable()
export class CarreraCursoService {
  create(createCarreraCursoDto: CreateCarreraCursoDto) {
    return 'This action adds a new carreraCurso';
  }

  findAll() {
    return `This action returns all carreraCurso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carreraCurso`;
  }

  update(id: number, updateCarreraCursoDto: UpdateCarreraCursoDto) {
    return `This action updates a #${id} carreraCurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} carreraCurso`;
  }
}
