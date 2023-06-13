import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { PrerequisitoCurso } from 'src/modules/prerequisito_curso/entities/prerequisito_curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrerequisitoCursoSeeder implements Seeder {
  constructor(
    @InjectRepository(PrerequisitoCurso)
    private readonly prerequisitoCursoRepository: Repository<PrerequisitoCurso>,
    @InjectRepository(CarreraCursoPrerequisito)
    private readonly carreraCursoPrerequisitoRepository: Repository<CarreraCursoPrerequisito>,
  ) {}

  async seed(): Promise<any> {
    const ids_carrera_curso_prerequisito =
      await this.carreraCursoPrerequisitoRepository.find({
        select: { id: true },
      });

    const carrera_curso_prerequisitos = [
      { codigo_curso: '028', id_carrera_curso_prerequisito: 1 },
      { codigo_curso: '169', id_carrera_curso_prerequisito: 2 },
      { codigo_curso: '169', id_carrera_curso_prerequisito: 3 },
      { codigo_curso: '177', id_carrera_curso_prerequisito: 4 },
      { codigo_curso: '2792', id_carrera_curso_prerequisito: 5 },

      { codigo_curso: '170', id_carrera_curso_prerequisito: 6 },
      { codigo_curso: '170', id_carrera_curso_prerequisito: 8 },
      { codigo_curso: '170', id_carrera_curso_prerequisito: 10 },
      { codigo_curso: '170', id_carrera_curso_prerequisito: 12 },
      { codigo_curso: '170', id_carrera_curso_prerequisito: 13 },
      { codigo_curso: '170', id_carrera_curso_prerequisito: 14 },
      { codigo_curso: '2793', id_carrera_curso_prerequisito: 15 },
    ];

    const entidades = [];
    for (let index = 0; index < carrera_curso_prerequisitos.length; index++) {
      const prerequisito = carrera_curso_prerequisitos[index];
      const ids = ids_carrera_curso_prerequisito[index];
      
      prerequisito.id_carrera_curso_prerequisito = ids.id;
      entidades.push(prerequisito)
    }

    return this.prerequisitoCursoRepository.save(entidades);
  }

  async drop(): Promise<any> {
    return this.prerequisitoCursoRepository.delete({});
  }
}
