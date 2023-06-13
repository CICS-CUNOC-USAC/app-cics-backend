import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraCursoPrerequisitoSeeder implements Seeder {
  constructor(
    @InjectRepository(CarreraCursoPrerequisito)
    private readonly carreraCursoPrerequisitoRepository: Repository<CarreraCursoPrerequisito>,
  ) {}

  async seed(): Promise<any> {
    const carrera_curso_prerequisitos = [
      { codigo_carrera: 58, codigo_curso: '029',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '170',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '072',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '178',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '2793',  es_curso: true },

      { codigo_carrera: 58, codigo_curso: '2797',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '2797',  es_curso: false },
      { codigo_carrera: 58, codigo_curso: '2795',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '2795',  es_curso: false },
      { codigo_carrera: 58, codigo_curso: '2796',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '2796',  es_curso: false },
      { codigo_carrera: 58, codigo_curso: '290',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '146',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '146',  es_curso: true },
      { codigo_carrera: 58, codigo_curso: '2794',  es_curso: true }

    ];

    return this.carreraCursoPrerequisitoRepository.save(carrera_curso_prerequisitos);
  }

  async drop(): Promise<any> {
    return this.carreraCursoPrerequisitoRepository.delete({});
  }
}
