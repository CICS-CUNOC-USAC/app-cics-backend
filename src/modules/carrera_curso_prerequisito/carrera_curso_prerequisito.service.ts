import { Injectable } from '@nestjs/common';
import { CreateCarreraCursoPrerequisitoDto } from './dto/create-carrera_curso_prerequisito.dto';
import { UpdateCarreraCursoPrerequisitoDto } from './dto/update-carrera_curso_prerequisito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarreraCursoPrerequisito } from './entities/carrera_curso_prerequisito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraCursoPrerequisitoService {
  constructor(
    @InjectRepository(CarreraCursoPrerequisito)
    private readonly carreraCursoPrerequisitoRepository: Repository<CarreraCursoPrerequisito>,
  ) {}

  create(createCarreraCursoPrerequisitoDto: CreateCarreraCursoPrerequisitoDto) {
    return 'This action adds a new carreraCursoPrerequisito';
  }

  findAll() {
    return `This action returns all carreraCursoPrerequisito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carreraCursoPrerequisito`;
  }

  prerequisitosCurso(carrera: number, curso: string) {
    return this.carreraCursoPrerequisitoRepository.find({
      select: {
        id: true,
      },
      where: {
        codigo_carrera: carrera,
        codigo_curso: curso,
      },
    });
  }

  update(
    id: number,
    updateCarreraCursoPrerequisitoDto: UpdateCarreraCursoPrerequisitoDto,
  ) {
    return `This action updates a #${id} carreraCursoPrerequisito`;
  }

  remove(id: number) {
    return `This action removes a #${id} carreraCursoPrerequisito`;
  }
}
