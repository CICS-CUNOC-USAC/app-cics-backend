import { Injectable } from '@nestjs/common';
import { CreateCarreraCursoPrerequisitoDto } from './dto/create-carrera_curso_prerequisito.dto';
import { UpdateCarreraCursoPrerequisitoDto } from './dto/update-carrera_curso_prerequisito.dto';

@Injectable()
export class CarreraCursoPrerequisitoService {
  create(createCarreraCursoPrerequisitoDto: CreateCarreraCursoPrerequisitoDto) {
    return 'This action adds a new carreraCursoPrerequisito';
  }

  findAll() {
    return `This action returns all carreraCursoPrerequisito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carreraCursoPrerequisito`;
  }

  update(id: number, updateCarreraCursoPrerequisitoDto: UpdateCarreraCursoPrerequisitoDto) {
    return `This action updates a #${id} carreraCursoPrerequisito`;
  }

  remove(id: number) {
    return `This action removes a #${id} carreraCursoPrerequisito`;
  }
}
