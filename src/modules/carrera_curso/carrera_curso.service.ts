import { Injectable } from '@nestjs/common';
import { CreateCarreraCursoDto } from './dto/create-carrera_curso.dto';
import { UpdateCarreraCursoDto } from './dto/update-carrera_curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarreraCurso } from './entities/carrera_curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraCursoService {
  constructor(
    @InjectRepository(CarreraCurso)
    private readonly carreraCursoRepository: Repository<CarreraCurso>,
  ) {}

  create(createCarreraCursoDto: CreateCarreraCursoDto) {
    return 'This action adds a new carreraCurso';
  }

  findAll() {
    return `This action returns all carreraCurso`;
  }

  cursosCarreraSemestre(carrera: number, semestre: number) {
    return this.carreraCursoRepository.find({
      select: {
          curso: {
              nombre: true,
              descripcion: true,
              creditos: true
          }
      },
      where: {
        codigo_carrera: carrera,
        semestre: semestre,
      },
      relations: { curso: true },
    });
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
